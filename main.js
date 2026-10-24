let currentLang = 'en';
let currentLecData = null;

const uiStrings = {
    ar: {
        revBtn: "مراجعة",
        quizBtn: "أسئلة",
        revTitle: "المراجعة",
        round: "الجولة",
        prev: "السابق",
        next: "التالي",
        finish: "إنهاء الجولة",
        winTitle: "أحسنت! 🎉",
        winMsg: "تم إنهاء جميع الأسئلة بنجاح!🏆",
        home: "الرئيسية",
        style_ethics: "الأسلوب الأكاديمي والأخلاقيات (Style & Ethics)",
        noQuestions: "لا توجد أسئلة متاحة لهذه المحاضرة بعد.",
        hintTitle: "معلومة توضيحية"
    },
    en: {
        revBtn: "Revision",
        quizBtn: "Quiz",
        revTitle: "Revision",
        round: "Round",
        prev: "Prev",
        next: "Next",
        finish: "Finish Round",
        winTitle: "Well Done! 🎉",
        winMsg: "All questions completed successfully! 🏆",
        home: "Home",
        style_ethics: "Academic Style & Ethics",
        noQuestions: "No questions available for this lecture yet.",
        hintTitle: "Key Explanation 💡"
    }
};

function formatText(str) {
    if (!str) return '';
    return str.replace(/\*(.*?)\*/g, '<span style="color: #E91E63; font-weight: 900;">$1</span>');
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.getElementById('html-root').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('html-root').lang = currentLang;
    document.getElementById('lang-fab').innerText = currentLang === 'ar' ? 'EN' : 'AR';

    if (document.getElementById('home-screen').classList.contains('active')) {
        renderHome();
    } else if (document.getElementById('revision-screen').classList.contains('active')) {
        renderRevision();
    } else if (document.getElementById('quiz-screen').classList.contains('active')) {
        updateQuizUI();
        loadQuestion(true);
    }
}

// ==========================================================================
// إدارة الشاشات والتاريخ (History API)
// ==========================================================================
function navigateToScreen(screenId, pushHistory = true) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    if (pushHistory) {
        history.pushState({ screen: screenId }, '', `#${screenId}`);
    }
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.screen) {
        if (event.state.screen === 'home-screen') {
            goHome(false);
        } else if (event.state.screen === 'revision-screen' && currentLecData) {
            openRevision(currentLecData.id, false);
        } else if (event.state.screen === 'quiz-screen' && currentLecData) {
            initQuiz(currentLecData.id, false);
        }
    } else {
        goHome(false);
    }
});

function goHome(pushHistory = true) {
    navigateToScreen('home-screen', pushHistory);
    document.getElementById('win-overlay').style.display = 'none';
    renderHome();
}

function closeWinOverlay() {
    document.getElementById('win-overlay').style.display = 'none';
    goHome();
}

// ==========================================================================
// شاشة الرئيسية (بدون عنوان أو خط مقسم لهيكل الورقة العلمية)
// ==========================================================================
function renderHome() {
    const list = document.getElementById('lectures-list');
    list.innerHTML = '';

    // عرض بطاقات المحاضرات مباشرة بدون أي خطوط أو عناوين علوية
    const structureLecs = allLectures.filter(l => l.branch === 'structure');
    if (structureLecs.length > 0) {
        let grid = `<div class="lectures-grid">`;
        structureLecs.forEach(lec => grid += createCardHTML(lec));
        grid += `</div>`;
        list.innerHTML += grid;
    }

    const styleLecs = allLectures.filter(l => l.branch === 'style_ethics');
    if (styleLecs.length > 0) {
        list.innerHTML += `<div class="branch-title">${uiStrings[currentLang].style_ethics}</div>`;
        let grid = `<div class="lectures-grid">`;
        styleLecs.forEach(lec => grid += createCardHTML(lec));
        grid += `</div>`;
        list.innerHTML += grid;
    }
}

function createCardHTML(lec) {
    return `
        <div class="lec-card">
            <div class="lec-title">${lec.title[currentLang]}</div>
            <div class="lec-actions">
                <button type="button" class="btn-action btn-rev" onclick="openRevision('${lec.id}')">${uiStrings[currentLang].revBtn}</button>
                <button type="button" class="btn-action btn-quiz" onclick="initQuiz('${lec.id}')">${uiStrings[currentLang].quizBtn}</button>
            </div>
        </div>
    `;
}

// ==========================================================================
// شاشة المراجعة (مع كروت الاستكشاف النظيفة وبدون نصوص توجيهية دائمة)
// ==========================================================================
function openRevision(lecId, pushHistory = true) {
    currentLecData = allLectures.find(l => l.id === lecId);
    if (!currentLecData) return;
    navigateToScreen('revision-screen', pushHistory);
    renderRevision();
}

function renderRevision() {
    if (!currentLecData) return;
    document.getElementById('rev-title').innerText = uiStrings[currentLang].revTitle;
    const board = document.getElementById('mindmap-board');
    board.innerHTML = '';

    const darkColors = ['#E91E63', '#009688', '#FF9800', '#673AB7', '#2196F3'];
    const lightColors = ['#FCE4EC', '#E0F2F1', '#FFF3E0', '#EDE7F6', '#E3F2FD'];

    currentLecData.revision.forEach((node, index) => {
        const primaryColor = darkColors[index % darkColors.length];
        const bgColor = lightColors[index % lightColors.length];

        let branchesHTML = '';
        node.branches.forEach((b) => {
            if (b.type === 'info') {
                branchesHTML += `
                    <div class="kid-info-box" style="border-inline-start: 6px solid ${primaryColor}; background-color: ${bgColor};">
                        <div class="node-title" style="color: ${primaryColor};">${b.nodeTitle[currentLang]}</div>
                        <div class="node-content">${formatText(b.content[currentLang])}</div>
                    </div>`;

            } else if (b.type === 'flip' || b.type === 'reveal') {
                // كرت استكشاف نظيف: العنوان فقط مع أيقونة سهم دائرية تدور عند الفتح
                branchesHTML += `
                    <div class="kid-reveal-card" style="border-color: ${primaryColor};" onclick="this.classList.toggle('open')">
                        <div class="kid-reveal-header" style="background-color: ${bgColor}; color: ${primaryColor};">
                            <span>${b.nodeTitle[currentLang]}</span>
                            <span class="kid-reveal-icon" style="background: ${primaryColor}; color: white;">▾</span>
                        </div>
                        <div class="kid-reveal-body">
                            ${formatText(b.content[currentLang])}
                        </div>
                    </div>`;

            } else if (b.type === 'compare') {
                branchesHTML += `
                    <div class="kid-compare-table">
                        <div class="compare-col" style="background: #E3F2FD;">
                            <div class="compare-header" style="color: #1976D2;">${b.val1Title[currentLang]}</div>
                            <div class="compare-body">${formatText(b.val1[currentLang])}</div>
                        </div>
                        <div class="compare-col" style="background: #FCE4EC; border-inline-start: 2px solid #ccc;">
                            <div class="compare-header" style="color: #C2185B;">${b.val2Title[currentLang]}</div>
                            <div class="compare-body">${formatText(b.val2[currentLang])}</div>
                        </div>
                    </div>`;

            } else if (b.type === 'steps') {
                let stepsHTML = b.steps.map((step, idx) => `
                    <div class="compact-step">
                        <div class="compact-step-num" style="background: ${primaryColor};">${idx + 1}</div>
                        <div class="compact-step-text">${formatText(step[currentLang])}</div>
                    </div>
                `).join('');

                branchesHTML += `
                    <div class="kid-steps-container">
                        <div class="node-title" style="color:${primaryColor};">${b.nodeTitle[currentLang]}</div>
                        <div class="compact-steps-wrapper">${stepsHTML}</div>
                    </div>`;

            } else if (b.type === 'tree') {
                let leafsHTML = b.leafs.map(leaf => `
                    <div class="kid-chip" style="color: ${primaryColor}; border-color: ${primaryColor};">${formatText(leaf[currentLang])}</div>
                `).join('');

                branchesHTML += `
                    <div class="kid-tags-container" style="background-color: ${bgColor};">
                        <div class="node-title" style="color: ${primaryColor}; text-align: center;">${b.nodeTitle[currentLang]}</div>
                        <div class="tags-wrapper">${leafsHTML}</div>
                    </div>`;
            }
        });

        board.innerHTML += `
            <div class="kid-section-card" style="border: 3px solid ${primaryColor}; box-shadow: 0 6px 0 ${primaryColor};">
                <div class="kid-section-title" style="background: ${primaryColor};">${node.title[currentLang]}</div>
                <div class="kid-section-body">${branchesHTML}</div>
            </div>`;
    });
}

// ==========================================================================
// شاشة الكويز مع صندوق التوضيح (Hint Box)
// ==========================================================================
let currentRoundQuestions = [];
let currentIndex = 0;
let currentRound = 1;

function initQuiz(lecId, pushHistory = true) {
    currentLecData = allLectures.find(l => l.id === lecId);
    if (!currentLecData || !currentLecData.quiz || currentLecData.quiz.length === 0) {
        alert(uiStrings[currentLang].noQuestions);
        return;
    }
    currentRound = 1;
    prepareRound(currentLecData.quiz);

    navigateToScreen('quiz-screen', pushHistory);
    updateQuizUI();
    loadQuestion();
}

function updateQuizUI() {
    document.getElementById('prev-btn').innerText = uiStrings[currentLang].prev;
    document.getElementById('round-info').innerText = `${uiStrings[currentLang].round} (${currentRound})`;
    document.getElementById('win-msg').innerText = uiStrings[currentLang].winMsg;
    document.querySelector('.win-title').innerText = uiStrings[currentLang].winTitle;
    document.getElementById('home-btn').innerText = uiStrings[currentLang].home;
}

function prepareRound(questionsArray) {
    currentRoundQuestions = questionsArray.map(q => {
        let clonedQ = JSON.parse(JSON.stringify(q));
        const numOptions = clonedQ.opts.en ? clonedQ.opts.en.length : clonedQ.opts.ar.length;
        const baseIndices = Array.from({ length: numOptions }, (_, i) => i);

        clonedQ.shuffledIndices = shuffleArray(baseIndices);
        clonedQ.userAnswerIndex = null;
        return clonedQ;
    });
    currentIndex = 0;
}

function loadQuestion(preserveState = false) {
    const qData = currentRoundQuestions[currentIndex];
    const total = currentRoundQuestions.length;

    document.getElementById('counter').innerText = `${currentIndex + 1} / ${total}`;
    document.getElementById('bar').style.width = `${((currentIndex + 1) / total) * 100}%`;
    document.getElementById('q-txt').innerHTML = formatText(qData.q[currentLang]);

    const box = document.getElementById('opt-box');
    box.innerHTML = '';

    qData.shuffledIndices.forEach(originalIdx => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.innerHTML = formatText(qData.opts[currentLang][originalIdx]);

        if (qData.userAnswerIndex === null) {
            btn.onclick = () => selectOption(btn, originalIdx, qData);
        } else {
            btn.disabled = true;
            if (originalIdx === qData.correct) {
                btn.classList.add('correct');
            } else if (originalIdx === qData.userAnswerIndex) {
                btn.classList.add('wrong');
            }
        }
        box.appendChild(btn);
    });

    // إدارة ظهور صندوق الـ Hint بعد الإجابة فقط
    const hintBox = document.getElementById('hint-box');
    const hintData = qData.hint || qData.explanation;

    if (qData.userAnswerIndex !== null && hintData) {
        const hintContent = typeof hintData === 'object' ? hintData[currentLang] : hintData;
        hintBox.innerHTML = `
            <div class="quiz-hint-header">
                <span>💡</span>
                <span>${uiStrings[currentLang].hintTitle}</span>
            </div>
            <div class="quiz-hint-content">${formatText(hintContent)}</div>
        `;
        hintBox.style.display = 'block';
    } else {
        hintBox.style.display = 'none';
        hintBox.innerHTML = '';
    }

    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = (qData.userAnswerIndex === null);

    nextBtn.innerText = (currentIndex === total - 1 && qData.userAnswerIndex !== null)
        ? uiStrings[currentLang].finish
        : uiStrings[currentLang].next;
}

function selectOption(selectedBtn, originalIdx, qData) {
    qData.userAnswerIndex = originalIdx;
    loadQuestion();
}

function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function goNext() {
    if (currentIndex < currentRoundQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        evaluateRoundEnd();
    }
}

function evaluateRoundEnd() {
    let failedQuestions = currentRoundQuestions.filter(q => q.userAnswerIndex !== q.correct);

    if (failedQuestions.length > 0) {
        currentRound++;
        prepareRound(JSON.parse(JSON.stringify(failedQuestions)));
        document.getElementById('round-info').innerText = `${uiStrings[currentLang].round} (${currentRound})`;
        loadQuestion();
    } else {
        updateQuizUI();
        document.getElementById('win-overlay').style.display = 'flex';
        if (typeof confetti === 'function') {
            confetti({ particleCount: 250, spread: 90, origin: { y: 0.6 } });
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    history.replaceState({ screen: 'home-screen' }, '', '');
    renderHome();
});
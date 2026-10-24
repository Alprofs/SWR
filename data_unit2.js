allLectures.push({
    id: "unit2",
    branch: "structure",
    title: {
        ar: "المحاضرة 2: المنهج العلمي وخطواته",
        en: "Lecture 2: The Scientific Method & Research Cycle"
    },

    // =========================================================================
    // قسم المراجعة (Revision Mindmap)
    // =========================================================================
    revision: [
        {
            title: {
                ar: "⭐ [امتحان] خطوات المنهج العلمي الـ 5 بالترتيب (Slide 2)",
                en: "⭐ [EXAM] The 5 Core Steps of Scientific Method (In Order)"
            },
            branches: [
                {
                    type: "steps",
                    nodeTitle: {
                        ar: "الترتيب الصارم لخطوات النجاح (Steps to Success)",
                        en: "Strict Chronological Sequence"
                    },
                    steps: [
                        { 
                            ar: "*1. الملاحظة وتحديد المشكلة (Observation):* جمع المعلومات بالحواس وطرح سؤال محدد.", 
                            en: "*1. Observation:* Gathering information using the senses and asking a question." 
                        },
                        { 
                            ar: "*2. صياغة الفرضية (Hypothesis):* وضع تفسير أو تنبؤ ذكي قابل للاختبار.", 
                            en: "*2. Hypothesis:* Constructing an educated guess or testable prediction." 
                        },
                        { 
                            ar: "*3. إجراء التجربة (Experimentation):* تصميم واختبار الفرضية في ظروف محكمة ومضبوطة.", 
                            en: "*3. Experimentation:* Testing the hypothesis under controlled experimental conditions." 
                        },
                        { 
                            ar: "*4. تحليل البيانات (Data Analysis):* تنظيم وتسجيل النتائج في جداول ورسوم بيانية.", 
                            en: "*4. Data Analysis:* Organizing, graphing, and statistically evaluating the results." 
                        },
                        { 
                            ar: "*5. الاستنتاج (Conclusion):* مقارنة النتائج بالفرضية لتحديد صحتها وإعداد التقرير.", 
                            en: "*5. Conclusion:* Comparing results to the hypothesis and summarizing findings." 
                        }
                    ]
                }
            ]
        },
        {
            title: {
                ar: "⭐ [امتحان] الفرضية العلمية: التعريف والصياغة (Slide 9)",
                en: "⭐ [EXAM] Scientific Hypothesis: Definition & Format"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: {
                        ar: "ما هي الفرضية؟ (What is a Hypothesis?)",
                        en: "Definition & Nature of Hypothesis"
                    },
                    content: {
                        ar: "• *التعريف:* تخمين ذكي ومدروس (*Educated guess / Intelligent guess*) أو تنبؤ مبني على الملاحظات والمعرفة السابقة بموضوع البحث.<br>• *الشرط الأساسي:* يجب أن تكون *تفسيراً قابلاً للاختبار العملي* (Testable explanation).<br>• *الصيغة المعيارية:* تصاغ دائماً بصيغة: *(...If..., then)* أي (إذا حدث كذا... فإنه سيترتب عليه كذا).",
                        en: "• *Definition:* An *educated guess* or prediction based on prior observations and background knowledge.<br>• *Core Requirement:* Must be a *testable explanation* for an observed phenomenon.<br>• *Standard Format:* Explicitly stated in the *'If..., then...'* format (e.g., If fertilizer is added, then plant growth will increase)."
                    }
                },
                {
                    type: "flip",
                    nodeTitle: {
                        ar: "أمثلة تطبيقية لصياغة الفرضية (Hypothesis Examples)",
                        en: "Practical Examples of Hypothesis"
                    },
                    content: {
                        ar: "• *المثال الأول:* إذا قمنا بري ثلاثة نباتات بأنواع صودا مختلفة، *فإن* النبات الذي يُروى بـ Sprite سينمو ليكون الأطول.<br>• *المثال الثاني:* إذا أُضيف السماد العضوي إلى التربة، *فإن* معدل نمو النبات سيزداد.",
                        en: "• *Example 1:* IF I water three plants with different sodas, THEN the plant receiving Sprite will grow tallest.<br>• *Example 2:* IF bio-fertilizer is added to the soil, THEN plant growth will increase."
                    }
                }
            ]
        },
        {
            title: {
                ar: "⭐ [امتحان] المتغيرات والثوابت والمجموعة الضابطة (Slide 10 - 13)",
                en: "⭐ [EXAM] Variables, Constants & Control Groups"
            },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "المتغير المستقل (Independent Variable)", en: "Independent Variable" },
                    val1: {
                        ar: "• العامل الذي *يغيره الباحث عمداً* وبإرادته في التجربة (*What I CHANGE*).<br>• *قاعدة التجربة المضبوطة:* يجب تغيير عامل مستقل *واحد فقط* في التجربة الواحدة (Only ONE factor).",
                        en: "• The factor purposely changed or manipulated by the experimenter (*What I CHANGE*).<br>• Controlled experiments must change only *one* independent variable at a time."
                    },
                    val2Title: { ar: "المتغير التابع (Dependent Variable)", en: "Dependent Variable" },
                    val2: {
                        ar: "• العامل الذي يتم *قياسه وملاحظته* كنتيجة لتأثير المتغير المستقل (*What I OBSERVE / The factor being measured*).<br>• يمثل الاستجابة أو النتيجة التي تسجلها التجربة.",
                        en: "• The factor observed and measured as a direct result of the independent variable (*What I OBSERVE*).<br>• Represents the measured response or outcome."
                    }
                },
                {
                    type: "info",
                    nodeTitle: {
                        ar: "الثوابت والمجموعة الضابطة (Constants & Control Group)",
                        en: "Constants vs. Control Group"
                    },
                    content: {
                        ar: "• *الثوابت (Constants):* جميع العوامل الأخرى في التجربة التي يجب الحفاظ عليها *متطابقة تماماً ودون أي تغيير* في كلتا المجموعتين (مثل: حجم الأصيص، نوع التربة، كمية الضوء).<br>• *المجموعة الضابطة (Control Group):* مجموعة تتعرض لنفس جميع ظروف التجربة *باستثناء المتغير المراد اختباره*، وتعمل كـ *معيار أساسي للمقارنة* (Standard of comparison).",
                        en: "• *Constants:* Factors kept exactly the same across all experimental groups and not allowed to change.<br>• *Control Group:* Exposed to the exact same conditions except for the variable being tested; serves as the *standard of comparison*."
                    }
                }
            ]
        },
        {
            title: {
                ar: "⭐ [امتحان] أنواع البيانات والتكرار التجريبي (Slide 14 - 15)",
                en: "⭐ [EXAM] Data Types & Repeated Trials"
            },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "الملاحظات النوعية (Qualitative)", en: "Qualitative Data" },
                    val1: {
                        ar: "• بيانات تعتمد على الحواس *بدون أي أرقام* (Scales without numbers).<br>• تصف ما نراه، نشمه، نلمسه، نتذوقه، أو نسمعه.<br>• *أمثلة:* اللون أزرق، المذاق مر، صدور صوت فوران.",
                        en: "• Sensory observations described *without numerical values*.<br>• Collected via sight, smell, touch, taste, or hearing.<br>• *Examples:* Blue color, bitter taste, fizzing sound."
                    },
                    val2Title: { ar: "الملاحظات الكمية (Quantitative)", en: "Quantitative Data" },
                    val2: {
                        ar: "• بيانات رقمية قابلة للقياس المباشر بالوحدات والأجهزة (Consisting of numbers).<br>• *شرط إلزامي:* يجب أن تحتوي الملاحظة دائماً على *رقم* (Must include a number).<br>• *أمثلة:* الكتلة 5 جرامات، الطول 12 سم، درجة الحرارة 37°C.",
                        en: "• Measurable observations represented by numerical values.<br>• *Mandatory condition:* Must include an explicit number.<br>• *Examples:* 5 grams, 12 cm, 37°C."
                    }
                },
                {
                    type: "info",
                    nodeTitle: {
                        ar: "أهمية التجارب المكررة (Repeated Trials)",
                        en: "Importance of Repeated Trials (Slide 15)"
                    },
                    content: {
                        ar: "• *المفهوم:* إعادة إجراء الاختبار التجريبي أكثر من مرة تحت نفس الظروف.<br>• *الأهمية العلمية:*<br>1. تقديم نتائج أكثر دقة من خلال *حساب المتوسط الحسابي* للبيانات (Data is averaged).<br>2. *تقليل تأثير الخطأ العشوائي أو الصدفة* (Decrease the impact of chance error) على نتائج التجربة.",
                        en: "• *Concept:* Conducting experimental tests more than once.<br>• *Scientific Purpose:*<br>1. Provides more accurate results by *averaging the data* together.<br>2. *Decreases the impact of chance error* on experimental conclusions."
                    }
                }
            ]
        },
        {
            title: {
                ar: "استخلاص النتائج وحدود الإثبات العلمي (Slide 17)",
                en: "Drawing Conclusions & Limits of Proof"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: {
                        ar: "هل يمكن إثبات صحة الفرضية 100%؟",
                        en: "Can We Prove a Hypothesis 100%?"
                    },
                    content: {
                        ar: "• *قاعدة هامة جداً:* نجاح التجربة يثبت أن الفرضية *صحيحة على الأرجح* (Probably correct)، ولكن *لا يمكن إثبات حقيقة مطلقة بنسبة 100%* (Can't prove 100% truth).<br>• *أسباب فشل التجربة:* إذا لم تدعم البيانات الفرضية، فالسبب إما:<br>1. الفرضية الأصلية خاطئة (Hypothesis is wrong).<br>2. أو تصميم التجربة كان معيباً وغير دقيق (Experimental design is faulty).",
                        en: "• *Crucial Rule:* A successful experiment shows a hypothesis is *probably correct*; it *CANNOT prove 100% absolute truth*.<br>• *Reasons for Failure:* If results do not support the hypothesis, it is either because:<br>1. The hypothesis is wrong.<br>2. The experimental design is faulty."
                    }
                }
            ]
        },
        {
            title: {
                ar: "⭐ [امتحان] دورة البحث العلمي المستمرة (Slide 19)",
                en: "⭐ [EXAM] The Research Cycle & Knowledge Continuity"
            },
            branches: [
                {
                    type: "steps",
                    nodeTitle: {
                        ar: "مسار دورة البحث (The Research Cycle Flow)",
                        en: "Research Cycle Iterations"
                    },
                    steps: [
                        { ar: "*البداية:* ملاحظة ظاهرة وطرح سؤال جديد (Ask a question).", en: "*Starting Point:* Observation and asking a focused question." },
                        { ar: "*الاستكشاف:* قراءة الأبحاث السابقة وخلفية الموضوع (Background research).", en: "*Investigation:* Conducting thorough background research." },
                        { ar: "*البناء والتجريب:* صياغة الفرضية وتصميم التجربة واختبارها.", en: "*Execution:* Constructing a hypothesis and testing via experiment." },
                        { ar: "*فحص الإجراءات:* التأكد من سلامة الخطوات العملية ومعالجة أي خلل (Troubleshoot).", en: "*Evaluation:* Verifying if experimental procedures are working." },
                        { ar: "*التحليل والمقارنة:* تحليل البيانات ومقارنتها بتنبؤات الفرضية.", en: "*Analysis:* Analyzing data and drawing evidence-based conclusions." },
                        { ar: "*حلقة الاستمرارية:* بيانات ونتائج هذه التجربة تصبح *خلفية علمية لبحوث ومشاريع جديدة* مستقبلاً.", en: "*Cycle Continuity:* Experimental data becomes background research for new future projects." }
                    ]
                },
                {
                    type: "flip",
                    nodeTitle: {
                        ar: "هل المنهج العلمي غاية أم وسيلة؟ (Slide 20)",
                        en: "Scientific Method: End or Means?"
                    },
                    content: {
                        ar: "المنهج العلمي هو *وسيلة وأداة منهجية* منظمة لاكتشاف الحقائق وفهم العالم من حولنا وتفسير الظواهر، وليس مجرد غاية نقف عندها.",
                        en: "The Scientific Method is a systematic *means and tool* employed to acquire reliable knowledge and solve real-world problems, rather than a terminal end in itself."
                    }
                }
            ]
        }
    ],

    // =========================================================================
    // بنك الأسئلة الشامل (Quiz Bank - 24 سؤالاً متقناً ومتوازناً)
    // =========================================================================
    quiz: [
        // --- أسئلة خطوات المنهج العلمي وترتيبها (سلايد 2، 3) ---
        {
            q: {
                ar: "ما هو الترتيب التسلسلي الصحيح لخطوات المنهج العلمي الأساسية الخمس؟",
                en: "What is the correct chronological sequence of the five primary steps of the scientific method?"
            },
            opts: {
                ar: [
                    "الملاحظة ثم الفرضية ثم التجريب ثم تحليل البيانات ثم الاستنتاج",
                    "الفرضية ثم الملاحظة ثم الاستنتاج ثم التجريب ثم تحليل البيانات",
                    "الملاحظة ثم الاستنتاج ثم التجريب ثم الفرضية ثم تحليل البيانات",
                    "التجريب ثم صياغة الفرضية ثم الملاحظة ثم الاستنتاج ثم البيانات"
                ],
                en: [
                    "Observation, Hypothesis, Experimentation, Data Analysis, Conclusion",
                    "Hypothesis, Observation, Conclusion, Experimentation, Data Analysis",
                    "Observation, Conclusion, Experimentation, Hypothesis, Data Analysis",
                    "Experimentation, Hypothesis, Observation, Conclusion, Data Analysis"
                ]
            },
            correct: 0,
            hint: {
                ar: "الترتيب المعياري الصارم يبدأ بـ *الملاحظة*، تليها *الفرضية*، ثم *التجريب*، ثم *تحليل البيانات*، وأخيراً *الاستنتاج*.",
                en: "The required chronological order is strictly: *Observation -> Hypothesis -> Experimentation -> Data Analysis -> Conclusion*."
            }
        },
        {
            q: {
                ar: "ما هي النقطة التي ينطلق منها المنهج العلمي دائماً كخطوة أولى لحل أي مشكلة؟",
                en: "What is always the initial starting point of the scientific method?"
            },
            opts: {
                ar: ["تصميم جدول تحليل البيانات", "الملاحظة واستشعار المشكلة وطرح السؤال", "صياغة التوصيات النهائية للبحث", "نشر النتائج في مجلة علمية محكمة"],
                en: ["Designing a statistical data analysis table", "Observation, recognizing the problem, and asking a question", "Drafting final future recommendations", "Publishing conclusions in a peer-reviewed journal"]
            },
            correct: 1,
            hint: {
                ar: "الخطوة الأولى والشرارة لأي بحث علمي هي *الملاحظة (Observation)* باستخدام الحواس وتحديد التساؤل المُراد إجابته.",
                en: "The scientific process always initiates with *observation* through the senses, leading to asking a focused question."
            }
        },
        {
            q: {
                ar: "أثناء مرحلة استكشاف المشكلة، إذا وجد الباحث إجابة كاملة ومؤكدة لسؤاله في المراجع والكتب السابقة، فإنه:",
                en: "During problem exploration, if a researcher finds a complete established answer in existing literature, they should:"
            },
            opts: {
                ar: ["يكتفي بالإجابة ولا يحتاج للاستمرار في تصميم تجربة جديدة", "يعيد إجراء نفس التجارب السابقة دون أي تعديل", "يتجاهل ما وجده ويبدأ في صياغة فرضية عشوائية", "يقوم بتغيير جميع القوانين العلمية المكتشفة سابقاً"],
                en: ["Accept the answer and not need to move on with new experiments", "Re-run the exact previous experiments without modification", "Ignore the literature and formulate random hypotheses", "Attempt to overturn all established scientific principles"]
            },
            correct: 0,
            hint: {
                ar: "تنص قواعد البحث العلمي على أنه *إذا وُجد حل قاطع للمشكلة أثناء مراجعة الأدبيات فلا داعي للاستمرار* وإهدار الموارد في إعادة اختراع العجلة.",
                en: "According to research rules, if an answer is already verified in books and literature, *you do not need to move on*."
            }
        },

        // --- أسئلة الفرضية وصياغتها (سلايد 9) ---
        {
            q: {
                ar: "تُعرَّف الفرضية العلمية (Hypothesis) في المنهج العلمي بأنها:",
                en: "In the scientific method, a scientific hypothesis is formally defined as:"
            },
            opts: {
                ar: ["حقيقة علمية مطلقة لا تقبل التشكيك أو الاختبار", "تخمين ذكي وتفسير مبني على الملاحظة وقابل للاختبار", "قانون رياضي ثابت تم إثباته في كل زمان ومكان", "النتيجة النهائية المؤكدة المستخلصة بعد إجراء التجربة"],
                en: ["An absolute factual truth that cannot be tested", "An educated guess and testable explanation based on observation", "A permanent mathematical law proven universally", "The final verified conclusion drawn after the experiment"]
            },
            correct: 1,
            hint: {
                ar: "الفرضية هي *تخمين ذكي أو مدروس (Educated guess)* وتفسير مؤقت يمكن اختباره عملياً بالتحري والتجربة.",
                en: "A hypothesis is strictly an *educated guess or prediction* that offers a *testable explanation* for an observation."
            }
        },
        {
            q: {
                ar: "ما هي الصيغة المعيارية المعتمدة التي تُصاغ بها الفرضية العلمية لاختبار العلاقة بين المتغيرات؟",
                en: "What is the standard conditional format used to formulate a scientific hypothesis?"
            },
            opts: {
                ar: ["صيغة (إذا...، فإن...)", "صيغة السؤال الاستنكاري المفتوح", "صيغة السرد القصصي الحر", "صيغة الأمر المباشر المعملي"],
                en: ["The 'If..., then...' conditional format", "An open-ended rhetorical question format", "A free-form narrative storytelling format", "A direct imperative laboratory command format"]
            },
            correct: 0,
            hint: {
                ar: "تُصاغ الفرضيات العلمية بصيغة *'إذا...، فإن...' (If..., then...)* لربط السبب المفترض بالنتيجة المتوقعة بشكل قابل للقياس.",
                en: "Scientific hypotheses are systematically structured in the *'If..., then...'* format to state cause and predicted effect."
            }
        },
        {
            q: {
                ar: "تعتبر الفرضية العلمية حقيقة مثبتة بمجرد صياغتها، ولا يشترط أن تكون قابلة للاختبار التجريبي.",
                en: "A scientific hypothesis is regarded as a proven fact upon formulation and does not require empirical testability."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1,
            hint: {
                ar: "خطأ. الفرضية هي مجرد *توقع مؤقت* والشرط الجوهري فيها هو أن تكون *قابلة للاختبار التجريبي (Testable)* لإثبات صحتها أو خطئها.",
                en: "False. A hypothesis is merely a tentative prediction and *must be testable* under controlled experimental conditions."
            }
        },

        // --- أسئلة المتغيرات والثوابت والمجموعة الضابطة (سلايد 10 - 13) ---
        {
            q: {
                ar: "ما هو المتغير المستقل (Independent Variable) في التجربة العلمية؟",
                en: "What is the Independent Variable in a scientific experiment?"
            },
            opts: {
                ar: ["العامل الذي يتم قياسه وملاحظته في نهاية التجربة", "العامل الذي يغيره الباحث عمداً وبإرادته لاختبار تأثيره", "العامل الذي يجب أن يظل ثابتاً تماماً في كل المجموعات", "المعيار الطبيعي المستخدم للمقارنة بدون أي إضافات"],
                en: ["The factor measured and observed at the end of the experiment", "The factor purposely changed by the experimenter to test its effect", "The factor that must remain completely unchanged across groups", "The baseline standard used for neutral comparison"]
            },
            correct: 1,
            hint: {
                ar: "المتغير المستقل هو *ما يقوم الباحث بتغييره عمداً (What I CHANGE)* لدراسة أثره على باقي عناصر التجربة.",
                en: "The independent variable is the single parameter that the researcher deliberately *changes or manipulates*."
            }
        },
        {
            q: {
                ar: "ما هو المتغير التابع (Dependent Variable) في التجربة العلمية؟",
                en: "What is the Dependent Variable in a scientific experiment?"
            },
            opts: {
                ar: ["العامل الذي يتحكم فيه الباحث بشكل مسبق", "العامل الذي يُقاس ويُلاحظ كنتيجة للمتغير المستقل", "الجهاز المستخدم لتثبيت درجة حرارة المعمل", "العامل الذي يُلغى نهائياً من خطوات التجربة"],
                en: ["The factor predetermined and controlled by the researcher", "The factor measured and observed as a result of the independent variable", "The equipment used to stabilize laboratory temperature", "The factor completely eliminated from experimental procedures"]
            },
            correct: 1,
            hint: {
                ar: "المتغير التابع هو *ما يتم قياسه وملاحظته (What I OBSERVE / factor being measured)* كنتيجة للتغيير الذي أحدثه الباحث.",
                en: "The dependent variable represents the measured outcome or response (*What I OBSERVE*) caused by the independent variable."
            }
        },
        {
            q: {
                ar: "كم متغيراً مستقلاً يُسمح بتغييره في التجربة العلمية المضبوطة الواحدة؟",
                en: "How many independent variables should be intentionally manipulated in a single controlled experiment?"
            },
            opts: {
                ar: ["عامل مستقل واحد فقط", "عاملان مستقلان على الأقل في نفس الوقت", "ثلاثة عوامل مستقلة بالتناوب", "لا توجد قيود على عدد المتغيرات"],
                en: ["Only one independent variable", "At least two independent variables simultaneously", "Three independent variables alternately", "There are no restrictions on variable count"]
            },
            correct: 0,
            hint: {
                ar: "في التجارب المضبوطة، يجب تغيير *عامل واحد فقط (Only ONE factor)* في المرة الواحدة لعزل السبب وتحديد المسؤول عن النتيجة بدقة.",
                en: "A valid controlled experiment isolates cause and effect by manipulating *only ONE factor (variable)* at a time."
            }
        },
        {
            q: {
                ar: "ما هي الثوابت (Constants) في التجربة المعملية؟",
                en: "What are 'Constants' in a scientific laboratory experiment?"
            },
            opts: {
                ar: ["العوامل التي تتغير عشوائياً وتؤثر على دقة الأجهزة", "العوامل التي يتم الحفاظ عليها متطابقة تماماً دون تغيير", "الفرضيات التي ثبت عدم صحتها في التجارب السابقة", "الرسوم البيانية المستخدمة لتمثيل النتائج النهائية"],
                en: ["Factors that fluctuate randomly and affect instrument accuracy", "Factors kept exactly the same and not allowed to change", "Hypotheses that were previously proven incorrect", "The graphical representations used to display final outcomes"]
            },
            correct: 1,
            hint: {
                ar: "الثوابت هي *جميع العوامل التي تظل كما هي دون أي تغيير* في كل المجموعات لضمان عدالة وموثوقية التجربة.",
                en: "Constants are all the external variables kept *strictly identical and unchanging* across all experimental setups."
            }
        },
        {
            q: {
                ar: "ما هي الوظيفة الجوهرية للمجموعة الضابطة (Control Group) في التجربة العلمية؟",
                en: "What is the primary function of a Control Group in a scientific experiment?"
            },
            opts: {
                ar: ["تلقي جرعات مضاعفة من المتغير المُراد اختباره", "العمل كمعيار ومقياس أساسي للمقارنة مع المجموعة التجريبية", "تسجيل البيانات الإحصائية دون إجراء أي ملاحظة", "إثبات أن الفرضية صحيحة بنسبة مئة بالمئة مسبقاً"],
                en: ["Receiving doubled treatments of the variable being tested", "Serving as a baseline standard of comparison against experimental groups", "Recording statistical calculations without empirical observations", "Proving in advance that the hypothesis is completely true"]
            },
            correct: 1,
            hint: {
                ar: "المجموعة الضابطة تتعرض لنفس الظروف باستثناء المتغير قيد الاختبار، وتعمل كـ *معيار أساسي للمقارنة (Standard of comparison)*.",
                en: "The control group serves as the vital *standard of comparison*, exposed to all identical baseline conditions except the test variable."
            }
        },
        {
            q: {
                ar: "في تجربة لدراسة أثر 'نوع السائل' على 'معدل نمو النبات'، ماذا يمثل 'معدل نمو النبات'؟",
                en: "In an experiment testing the effect of 'liquid type' on 'plant growth rate', plant growth rate represents:"
            },
            opts: {
                ar: ["المتغير المستقل", "المتغير التابع", "المجموعة الضابطة", "العامل الثابت الوحيد"],
                en: ["The independent variable", "The dependent variable", "The control group", "The only constant parameter"]
            },
            correct: 1,
            hint: {
                ar: "نوع السائل هو المتغير المستقل (الذي نغيره)، بينما نمو النبات هو *المتغير التابع المقاس (Dependent variable)*.",
                en: "The liquid applied is the independent variable, whereas the resulting plant growth is the measured *dependent variable*."
            }
        },
        {
            q: {
                ar: "في تجربة اختبار سماد كيميائي جديد على نباتات القمح، المجموعة التي لا تتلقى أي سماد تُسمى:",
                en: "In an experiment testing a new chemical fertilizer on wheat, the group receiving no fertilizer is called:"
            },
            opts: {
                ar: ["المجموعة التجريبية", "المجموعة الضابطة", "المتغير المستقل", "العينة العشوائية غير المضبوطة"],
                en: ["The experimental group", "The control group", "The independent variable", "The uncontrolled sample"]
            },
            correct: 1,
            hint: {
                ar: "المجموعة التي لا تتلقى المعاملة أو المتغير المستقل تُسمى *المجموعة الضابطة (Control group)* للمقارنة بها.",
                en: "The group that is left untreated by the tested variable serves as the *control group*."
            }
        },

        // --- أسئلة جمع البيانات والتجارب المكررة (سلايد 14، 15) ---
        {
            q: {
                ar: "ما هي الخاصية المميزة للملاحظات النوعية (Qualitative Observations)؟",
                en: "What is the defining characteristic of Qualitative Observations?"
            },
            opts: {
                ar: ["تعتمد دائماً على وحدات قياس رقمية محددة", "تُجمع بواسطة الحواس وتصف الصفات بدون أرقام", "تتطلب استخدام معادلات إحصائية معقدة فقط", "تختص فقط بقياس درجات الحرارة والكتلة"],
                en: ["Always dependent on standardized numerical measurement units", "Gathered using senses describing qualities without numbers", "Exclusively requiring complex mathematical formulas", "Restricted strictly to measuring temperatures and mass"]
            },
            correct: 1,
            hint: {
                ar: "الملاحظات النوعية تصف الظواهر *بالحواس ودون استخدام أرقام (Without numbers)*، مثل اللون والملمس والرائحة والمذاق.",
                en: "Qualitative data uses sensory descriptions (sight, smell, taste, touch, sound) *without numeric scales*."
            }
        },
        {
            q: {
                ar: "أي من الملاحظات الآتية تُصنف على أنها ملاحظة كمية (Quantitative Observation)؟",
                en: "Which of the following observations is categorized as a Quantitative Observation?"
            },
            opts: {
                ar: ["المحلول الكيميائي لونه أزرق داكن", "طول ساق النبات يبلغ 15 سنتيمتراً", "المركب الناتج ذو مذاق مر ولاذع", "تصاعد صوت أزيز وفوران أثناء التفاعل"],
                en: ["The chemical solution exhibits a dark blue hue", "The plant stem height measures 15 centimeters", "The resulting compound possesses a bitter taste", "A distinct fizzing sound occurred during the reaction"]
            },
            correct: 1,
            hint: {
                ar: "الملاحظة الكمية *يجب أن تحتوي على رقم ووحدة قياس (Must include a number)*، ولذلك قياس (15 سم) ملاحظة كمية.",
                en: "Quantitative observations *must include a measurable number*; hence, measuring '15 centimeters' is quantitative."
            }
        },
        {
            q: {
                ar: "ما هي الفائدة العلمية المباشرة لإجراء 'تجارب مكررة' (Repeated Trials) لنفس الاختبار المعملي؟",
                en: "What is the primary scientific benefit of conducting 'Repeated Trials' in an experiment?"
            },
            opts: {
                ar: ["تغيير الفرضية العلمية في كل جولة بشكل إجباري", "زيادة دقة النتائج بحساب المتوسط وتقليل أثر الخطأ العشوائي", "تحويل البيانات الكمية إلى بيانات وصفية نوعية", "إلغاء الحاجة لوجود مجموعة ضابطة في المعمل"],
                en: ["Forcing modification of the hypothesis after every trial", "Increasing accuracy by averaging data and decreasing chance error", "Converting quantitative numerical data into qualitative notes", "Eliminating the requirement for having a control group"]
            },
            correct: 1,
            hint: {
                ar: "تكرار التجارب يوفر *نتائج أكثر دقة من خلال أخذ المتوسط الحسابي*، كما يعمل على *تقليل أثر الخطأ العشوائي (Decrease chance error)*.",
                en: "Repeated trials ensure high accuracy by *averaging results* and effectively *decreasing the impact of chance error*."
            }
        },
        {
            q: {
                ar: "يكفي إجراء التجربة العلمية لمرة واحدة فقط للوصول إلى استنتاج قاطع وموثوق علمياً.",
                en: "Conducting an experiment just once is sufficient to establish definitive, reliable scientific conclusions."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1,
            hint: {
                ar: "خطأ. إجراء التجربة لمرة واحدة قد يتأثر بالصدفة أو أخطاء عشوائية؛ لذا يلزم إجراء *تجارب مكررة (Repeated trials)* لتأكيد النتائج.",
                en: "False. Single trials are vulnerable to chance errors; scientific validation demands *repeated trials* to calculate accurate averages."
            }
        },

        // --- أسئلة استخلاص النتائج والتحقق (سلايد 16، 17) ---
        {
            q: {
                ar: "عند نجاح التجربة وتطابق بياناتها تماماً مع الفرضية، فإن ذلك يثبت أن الفرضية:",
                en: "When an experiment succeeds and data supports the hypothesis, this demonstrates that the hypothesis is:"
            },
            opts: {
                ar: ["صحيحة على الأرجح، ولكن لا يمكن إثبات صحتها بنسبة 100%", "حقيقة مطلقة وأبدية لا يمكن أن تتغير مستقبلاً", "قانون فيزيائي عام يلغي جميع النظريات السابقة", "غير صالحة للاستخدام في أي دراسات وبحوث أخرى"],
                en: ["Shown to be probably correct, but cannot prove 100% absolute truth", "An absolute immutable truth that can never be revised", "A universal law superseding all previous scientific frameworks", "No longer useful for any subsequent future studies"]
            },
            correct: 0,
            hint: {
                ar: "في العلم التجريبي: لا يوجد إثبات مطلق 100% (*Can't prove 100% truth*)، بل تُعتبر الفرضية *صحيحة على الأرجح (Probably correct)*.",
                en: "Science operates on provisional certainty: experiments show a hypothesis is *probably correct*, but *cannot prove 100% absolute truth*."
            }
        },
        {
            q: {
                ar: "إذا جاءت نتائج التجربة المعملية غير داعمة لفرضية الباحث، فقد يرجع ذلك إلى:",
                en: "If experimental results fail to support the researcher's hypothesis, this could be because:"
            },
            opts: {
                ar: ["الفرضية كانت خاطئة أو أن تصميم التجربة كان معيباً", "الباحث استخدم ملاحظات كمية دقيقة للغاية بالأرقام", "المجموعة الضابطة كانت مطابقة لظروف المعمل تماماً", "الباحث قام بتكرار التجربة عدة مرات متتالية"],
                en: ["The hypothesis is wrong or the experimental design is faulty", "The researcher employed highly accurate quantitative measurements", "The control group matched the experimental baseline conditions", "The researcher performed multiple repeated trials successively"]
            },
            correct: 0,
            hint: {
                ar: "فشل التجربة في دعم الفرضية يعود لأحد أمرين: إما أن *الفرضية خاطئة (Hypothesis is wrong)*، أو أن *تصميم التجربة معيب (Experimental design is faulty)*.",
                en: "Discrepant findings stem from either a fundamentally *incorrect hypothesis* or a *faulty experimental design*."
            }
        },
        {
            q: {
                ar: "أفضل وسيلة لتنظيم البيانات وتلخيص النتائج قبل استخلاص الاستنتاجات هي:",
                en: "The most effective method to organize experimental data prior to drawing conclusions is:"
            },
            opts: {
                ar: ["كتابة مقال سردي غير منظم في وسائل الإعلام العامة", "إنشاء جداول ورسوم بيانية ومخططات بيانية واضحة", "الاعتماد الكامل على الذاكرة الشخصية دون تدوين أرقام", "تجاهل الأرقام والتركيز فقط على الذوق والانطباع"],
                en: ["Drafting an unstructured opinion article in mass media", "Creating structured charts, tables, and analytical graphs", "Relying entirely on cognitive recall without recording measurements", "Discarding numerical figures to focus on subjective impressions"]
            },
            correct: 1,
            hint: {
                ar: "الخطوة السادسة في المنهج العلمي هي تنظيم البيانات عبر *إنشاء المخططات والرسوم البيانية (Create a chart or graph)* لتحليلها بدقة.",
                en: "Step 6 of the method specifically entails organizing collected raw data by *constructing charts and graphs* for clear analysis."
            }
        },

        // --- أسئلة دورة البحث العلمي والتواصل (سلايد 18، 19، 20) ---
        {
            q: {
                ar: "في دورة البحث العلمي (The Research Cycle)، ماذا يحدث لبيانات ونتائج التجارب السابقة؟",
                en: "In the continuous Research Cycle, what happens to previous experimental data?"
            },
            opts: {
                ar: ["تُحذف نهائياً وتُعتبر عديمة الفائدة بمجرد انتهاء التجربة", "تصبح معلومات وخلفية علمية لبناء أبحاث ومشاريع جديدة في المستقبل", "تُخفى عن المجتمع العلمي لمنع تكرار التحقق منها", "تتحول تلقائياً إلى خيال علمي غير قابل للتطبيق"],
                en: ["They are discarded and considered obsolete after experiment completion", "They serve as background research and baseline data for new projects", "They are kept strictly confidential to prevent external peer review", "They spontaneously transform into non-applicable science fiction"]
            },
            correct: 1,
            hint: {
                ar: "دورة البحث حلقة دائرية مستمرة؛ حيث تتحول *بيانات التجربة المنجزة إلى خلفية بحثية لمشاريع وأسئلة جديدة مستقبلاً*.",
                en: "The research cycle is iterative: *experimental data becomes background research for new questions and future projects*."
            }
        },
        {
            q: {
                ar: "ما هي الخطوة الختامية الضرورية للمنهج العلمي لتعميم الفائدة ومشاركة الاكتشافات؟",
                en: "What is the vital final step of the scientific method to share discoveries with the world?"
            },
            opts: {
                ar: ["إبقاء النتائج سرية داخل المعمل لتجنب النقد", "التواصل ونشر النتائج في مقالات ومجلات وكتب محكمة", "التراجع عن صياغة الفرضية بعد إثبات صحتها", "تغيير الثوابت المعملية بشكل عشوائي بعد انتهاء العمل"],
                en: ["Maintaining strict laboratory secrecy to avoid critical review", "Communicating and publishing findings in journals and scientific media", "Retracting the hypothesis after successfully confirming its predictions", "Randomly modifying experimental constants after completion"]
            },
            correct: 1,
            hint: {
                ar: "الخطوة الأخيرة هي *إيصال ونشر النتائج (Communicate Results)* للعلماء والجمهور عبر الأوراق البحثية والمؤتمرات والكتب.",
                en: "The concluding step is *communicating findings* by publishing papers in journals, books, and presenting at conferences."
            }
        },
        {
            q: {
                ar: "يُعتبر المنهج العلمي (Scientific Method) في جوهره وسيلة وأداة منهجية لاكتساب المعرفة وليس غاية نهائية في حد ذاته.",
                en: "The Scientific Method is fundamentally a systematic means and instrument for acquiring knowledge rather than an end in itself."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0,
            hint: {
                ar: "صح. المنهج العلمي هو *وسيلة (Means)* منظمة نستخدمها للتحري والوصول للحقيقة وحل المشكلات، وليس مجرد غاية مجردة نقف عندها.",
                en: "True. The scientific method is an operational *means and methodology* for uncovering reliable knowledge, not a terminal end."
            }
        },
        {
            q: {
                ar: "عند صياغة مشكلة البحث (Research Problem)، يجب أن تُصاغ في صورة:",
                en: "When defining the research problem, it should ideally be formulated as:"
            },
            opts: {
                ar: ["سؤال واضح ومحدد ودقيق يحدد أثر متغير على آخر", "عبارة عامة وغامضة تحتمل العديد من التأويلات", "تقرير إخباري خيالي لجذب انتباه القراء", "رأي شخصي مبني على المشاعر والانطباعات"],
                en: ["A clear, specific, and narrowed question defining the effect of variables", "A generalized and ambiguous statement open to multiple interpretations", "A fictional narrative report tailored for general entertainment", "A subjective personal opinion expressing emotional feelings"]
            },
            correct: 0,
            hint: {
                ar: "تُصاغ المشكلة دائماً في صورة *سؤال محدد ودقيق*، مثل: (ما هو أثر المتغير أ على المتغير ب؟) ليسهل قياسه واختباره.",
                en: "A proper scientific problem must be stated as a *narrow, clear question* (e.g., 'How does X affect Y?') to be practically investigable."
            }
        }
    ]
});
allLectures.push({
    id: "unit1",
    branch: "structure",
    title: {
        ar: "المحاضرة 1: مقدمة وأساسيات البحث والعلم",
        en: "Lecture 1: Intro to Science & Research"
    },

    // =========================================================================
    // قسم المراجعة (Revision Mindmap)
    // =========================================================================
    revision: [
        {
            title: {
                ar: "⭐ [امتحان] مقارنة الكتابة العلمية والكتابة عن العلوم (Slide 9)",
                en: "⭐ [EXAM] Scientific Writing vs. Science Writing (Slide 9)"
            },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "الكتابة العلمية (Scientific Writing)", en: "Scientific Writing" },
                    val1: {
                        ar: "• *الجمهور:* المتخصصون والعلماء (Professionals).<br>• *اللغة:* رسمية ودقيقة للغاية (Formal).<br>• *التفاصيل:* معقدة ومفصلة تقنياً (Complicated).<br>• *الهيكل:* هيكل بحثي صارم ومعياري (*IMRaD*).",
                        en: "• *Audience:* Professionals & Scientists.<br>• *Language:* Formal and technical.<br>• *Details:* Complicated and rigorous.<br>• *Format:* Rigid standard structure (*IMRaD*)."
                    },
                    val2Title: { ar: "الكتابة عن العلوم (Science Writing)", en: "Science Writing" },
                    val2: {
                        ar: "• *الجمهور:* عامة الناس والجمهور غير المتخصص (General).<br>• *اللغة:* بسيطة وواضحة وغير رسمية (Plain & Informal).<br>• *التفاصيل:* فكرة مبسطة خالية من التعقيد (Simple idea).<br>• *الهيكل:* أسلوب سردي وقصصي جذاب (Narrative Story).",
                        en: "• *Audience:* General public.<br>• *Language:* Plain and informal.<br>• *Details:* Simple core idea.<br>• *Format:* Engaging Narrative Story."
                    }
                },
                {
                    type: "flip",
                    nodeTitle: {
                        ar: "كتابة الخيال العلمي (Science-Fiction Writing)",
                        en: "Science-Fiction Writing (Slide 10)"
                    },
                    content: {
                        ar: "نوع من *الأدب التخيلي التكهني* (Speculative fiction) يحتوي على عناصر خيالية لا وجود لها في الواقع الحالي. يناقش قضايا مثل: *السفر عبر الزمن*، غزو الفضاء، والمستقبل، بالإضافة إلى استكشاف العواقب المحتملة للتقدم العلمي والتكنولوجي مثل *الاستنساخ* (Cloning).",
                        en: "A type of *speculative fiction* containing imagined elements that do *not* exist in the real world. Spans themes like *time travel*, space exploration, futuristic settings, and ethical/social consequences of advances like *cloning*."
                    }
                }
            ]
        },
        {
            title: {
                ar: "⭐ [امتحان] مفهوم العلم والتفكير العلمي (Slide 11 - 12)",
                en: "⭐ [EXAM] Definition of Science & Scientific Method"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: {
                        ar: "التعريف الأكاديمي للعلم (What is Science?)",
                        en: "Academic Definition of Science"
                    },
                    content: {
                        ar: "• *العلم:* هو المعرفة المكتسبة من خلال *ملاحظة الأحداث والظروف الطبيعية* بهدف اكتشاف *الحقائق* وصياغة *القوانين والمبادئ* التي يمكن التحقق منها أو *اختبارها* (Verified or Tested).<br>• هو عملية منهجية للتحري والتقصي لفهم العالم من حولنا واكتشاف معرفة موثوقة.<br>• تنشأ المعرفة العلمية حصراً من ممارسة *التفكير العلمي* بالاعتماد على *المنهج العلمي* (Scientific Method).",
                        en: "• *Science:* Knowledge obtained by *observing natural events and conditions* in order to discover *facts* and formulate *laws or principles* that can be *verified or tested*.<br>• A systematic process utilizing observation and investigation to understand nature.<br>• Scientific knowledge originates strictly from practicing *scientific thinking* via the *scientific method*."
                    }
                }
            ]
        },
        {
            title: {
                ar: "⭐ [امتحان] أنواع الملاحظات: العلم يعتمد الموضوعية فقط (Slide 14 - 15)",
                en: "⭐ [EXAM] Types of Observations: Objective vs. Subjective"
            },
            branches: [
                {
                    type: "compare",
                    val1Title: { ar: "الملاحظة الموضوعية (Objective)", en: "Objective Observation" },
                    val1: {
                        ar: "• مبنية على *حقيقة* (Fact).<br>• الحقيقة: معلومة محددة بدقة وقابلة للإثبات بالأدلة القاطعة.<br>• *أمثلة:* عدد الثواني في الدقيقة 60 ثانية، والرمز الكيميائي للماء هو H2O.<br>• *القاعدة الذهبية:* هي النوع *الوحيد* المقبول والمعتمد في العلوم.",
                        en: "• Based strictly on *fact*.<br>• Fact: A piece of information that can be strictly defined and proven true.<br>• *Examples:* 60 seconds in a minute; chemical formula of water is H2O.<br>• *Golden Rule:* It is the *ONLY* observation type utilized in science."
                    },
                    val2Title: { ar: "الملاحظة الشخصية (Subjective)", en: "Subjective Observation" },
                    val2: {
                        ar: "• مبنية على *رأي* (Opinion).<br>• الرأي: عبارة تعبر عن معتقد، أو قيمة، أو مشاعر وذوق شخصي.<br>• *أمثلة:* 'العلوم تبدو ممتعة اليوم!'، 'أغاني معينة تبدو رائعة'، 'فصل الصيف كان قصيراً جداً'.<br>• *لا يُبنى عليها العلم الحقيقي* لاختلافها بين الأفراد.",
                        en: "• Based on *opinion*.<br>• Opinion: Expresses an individual belief, personal value, or subjective feeling.<br>• *Examples:* 'Science looks fun today!', 'The summer was too short!'.<br>• Cannot serve as a primary foundation for empirical scientific findings."
                    }
                }
            ]
        },
        {
            title: {
                ar: "مفهوم البحث وأهدافه الجوهرية (Slide 16, 36)",
                en: "Concept of Research & Core Purposes"
            },
            branches: [
                {
                    type: "info",
                    nodeTitle: {
                        ar: "ما هو البحث العلمي؟ (What is Research?)",
                        en: "Definition & Nature of Research"
                    },
                    content: {
                        ar: "• هو عملية *منهجية ومنظمة* لجمع، وتحليل، وتفسير البيانات للإجابة عن سؤال أو حل مشكلة أو بناء معرفة جديدة.<br>• *تنبيه حاسم:* حتى لو اعتقدنا أن الحل بديهي، فإن المعرفة تظل مجرد *تخمين أو حدس* (Guesswork or Intuition) ما لم تُخضع للفحص العلمي الدقيق (Rigorous scientific scrutiny).",
                        en: "• The *systematic process* of collecting, analyzing, and interpreting information to answer questions, resolve problems, or generate new knowledge.<br>• *Key Concept:* Until subjected to *rigorous scientific scrutiny*, perceived knowledge remains mere guesswork or intuition."
                    }
                },
                {
                    type: "tree",
                    nodeTitle: {
                        ar: "الأهداف الأربعة الجوهرية للبحث (Core Purposes)",
                        en: "The Four Core Purposes of Research"
                    },
                    leafs: [
                        { ar: "1. اكتشاف معلومات جديدة (حقائق ونظريات غير مسبوقة)", en: "1. Discovering new information" },
                        { ar: "2. التوسع في المعرفة الحالية والبناء على أبحاث الآخرين", en: "2. Expanding existing knowledge" },
                        { ar: "3. حل المشكلات العملية والتطبيقية في المجتمع والصناعة", en: "3. Solving real-world practical problems" },
                        { ar: "4. اختبار الفرضيات والتحقق من صحتها تجريبياً", en: "4. Testing hypotheses under strict conditions" }
                    ]
                }
            ]
        },
        {
            title: {
                ar: "سمات الكتابة العلمية ووثائقها (Slide 6 - 7)",
                en: "Features of Scientific Writing & Documents"
            },
            branches: [
                {
                    type: "steps",
                    nodeTitle: {
                        ar: "أهم 7 ركائز للكتابة العلمية (Key Features)",
                        en: "The 7 Key Pillars of Scientific Writing"
                    },
                    steps: [
                        { ar: "*الدقة (Precision):* الموضوعية، الاهتمام الشديد بالتفاصيل، واستخدام لغة محكمة المعنى.", en: "*Precision:* Objectiveness, strict attention to detail, exact language." },
                        { ar: "*الوضوح (Clarity):* شرح التجارب بوضوح دون غموض في المصطلحات.", en: "*Clarity:* Transparent description of experimental procedures." },
                        { ar: "*مراجعة الأقران (Peer Reviews):* التحكيم والتدقيق من قبل علماء مستقلين متخصصين.", en: "*Peer Reviews:* Scrutiny and evaluation by external independent experts." },
                        { ar: "*الجمهور المستهدف (Primary Audience):* موجهة مباشرة للمجتمع العلمي والأكاديمي.", en: "*Primary Audience:* Tailored specifically for peers and specialists." },
                        { ar: "*اللغة الرسمية (Formal Language):* الالتزام الصارم بالأسلوب الأكاديمي الرصين.", en: "*Formal Language:* Rigorous, professional academic tone." },
                        { ar: "*الهيكل التنظيمي (IMRaD):* الالتزام بهيكل (مقدمة، طرق عمل، نتائج، ومناقشة).", en: "*Clear Structure:* Adherence to standard sections (IMRaD)." },
                        { ar: "*الإلمام بالدراسات السابقة:* وعي كامل بالأبحاث المنشورة في نفس التخصص.", en: "*Awareness of Literature:* Mastery of existing published literature." }
                    ]
                },
                {
                    type: "tree",
                    nodeTitle: {
                        ar: "أشكال الوثائق العلمية (Types of Documents)",
                        en: "Forms of Scientific Documents"
                    },
                    leafs: [
                        { ar: "التقارير المعملية (Reports)", en: "Laboratory Reports" },
                        { ar: "المقالات البحثية (Articles / Papers)", en: "Research Articles" },
                        { ar: "رسائل الماجستير والدكتوراه (Theses)", en: "Academic Theses" },
                        { ar: "مقترحات المشاريع (Research Proposals)", en: "Research Proposals" },
                        { ar: "العروض التقديمية والملصقات (Oral & Posters)", en: "Oral & Poster Presentations" }
                    ]
                }
            ]
        },
        {
            title: {
                ar: "قوس قصة البحث العلمي (Slide 38)",
                en: "The Research Story Narrative Arc"
            },
            branches: [
                {
                    type: "steps",
                    nodeTitle: {
                        ar: "التسلسل الدرامي للورقة العلمية (Research Story)",
                        en: "Dramatic Flow of a Research Paper"
                    },
                    steps: [
                        { ar: "*الاستهلال والصراع (Exposition & Conflict):* المشكلة والخلفية ومراجعة الأبحاث السابقة.", en: "*Exposition & Conflict:* Problem statement, background, literature review." },
                        { ar: "*تصاعد الأحداث (Rising Action):* تصميم البحث ومنهجية العمل المتبعة (Methodology).", en: "*Rising Action:* Experimental design and methodology." },
                        { ar: "*ذروة القصة (Climax):* تفسير البيانات وظهور النتائج والاكتشافات (Findings).", en: "*Climax:* Data interpretation and core findings." },
                        { ar: "*هبوط الأحداث (Falling Action):* المناقشة الموسعة للنتائج واستخلاص الاستنتاجات.", en: "*Falling Action:* Discussion and comprehensive conclusions." },
                        { ar: "*الحل والختام (Resolution):* التوصيات النهائية والتطبيقات المستقبلية المقترحة.", en: "*Resolution:* Practical recommendations and next steps." }
                    ]
                }
            ]
        }
    ],

    // =========================================================================
    // بنك الأسئلة الشامل (Quiz Bank - 24 أسئلة متوازنة وعميقة)
    // =========================================================================
    quiz: [
        // --- أسئلة مقارنة Scientific vs Science Writing (سلايد 9 وما حولها) ---
        {
            q: {
                ar: "من هو الجمهور المستهدف الأساسي في الكتابة العلمية (Scientific Writing)؟",
                en: "Who is the primary audience for Scientific Writing?"
            },
            opts: {
                ar: ["المتخصصون والباحثون في المجال", "عامة القراء غير المتخصصين", "طلاب المدارس الابتدائية", "محررو الصحف اليومية والمجلات العامة"],
                en: ["Field professionals and researchers", "General non-specialist readers", "Elementary school students", "Daily newspaper and magazine editors"]
            },
            correct: 0,
            hint: {
                ar: "الكتابة العلمية تُكتب من قِبل العلماء لمخاطبة *المتخصصين والعلماء الآخرين* (Professionals)، على عكس الكتابة عن العلوم الموجهة للجمهور العام.",
                en: "Scientific writing is written by researchers to communicate findings specifically to *peer professionals* and scholars, unlike Science Writing."
            }
        },
        {
            q: {
                ar: "ما هو الهيكل والنمط التنظيمي المعتمد في الكتابة عن العلوم (Science Writing)؟",
                en: "What is the primary format used in Science Writing?"
            },
            opts: {
                ar: ["هيكل IMRaD المنهجي المقسم", "الأسلوب القصصي السردي المشوق", "البروتوكول المعملي خطوة بخطوة", "التحليل الإحصائي المجرد"],
                en: ["Standard structured IMRaD format", "Engaging narrative story format", "Step-by-step laboratory protocol", "Pure abstract statistical analysis"]
            },
            correct: 1,
            hint: {
                ar: "الكتابة عن العلوم (Science Writing) تُبنى على *الأسلوب القصصي (Narrative Story)* لتسهيل وصول الفكرة للعامة، بينما هيكل IMRaD مخصص للكتابة العلمية (Scientific Writing).",
                en: "Science Writing utilizes a *narrative story* structure to captivate and inform the public, whereas IMRaD is strictly for Scientific Writing."
            }
        },
        {
            q: {
                ar: "تتميز الكتابة العلمية (Scientific Writing) بأن لغتها بسيطة وغير رسمية لتناسب جميع أطياف المجتمع.",
                en: "Scientific writing is characterized by plain and informal language to suit all social demographics."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1,
            hint: {
                ar: "خطأ. الكتابة العلمية تتطلب لغة *رسمية وصارمة* (Formal language)، في حين أن اللغة المبسطة وغير الرسمية (Plain and informal) هي سمة الكتابة عن العلوم (Science Writing).",
                en: "False. Scientific writing strictly demands a *formal* and precise academic tone, whereas plain and informal language belongs to Science Writing."
            }
        },
        {
            q: {
                ar: "أي من الخصائص التالية تمثل تفاصيل المحتوى في الكتابة العلمية (Scientific Writing) مقارنة بالكتابة عن العلوم؟",
                en: "Which of the following describes the nature of details in Scientific Writing compared to Science Writing?"
            },
            opts: {
                ar: ["فكرة مبسطة خالية من التعقيد الرياضي", "تفاصيل معقدة ومتعمقة تقنياً", "مزيج خيالي من التكهنات المستقبلية", "ملخصات سريعة تركز فقط على المشاعر الإنسانية"],
                en: ["A single simplified non-technical concept", "Complicated, highly technical details", "Speculative futuristic imaginative mixtures", "Brief impressions focusing strictly on human emotions"]
            },
            correct: 1,
            hint: {
                ar: "تتضمن الكتابة العلمية *تفاصيل معقدة* (Complicated details) تشمل المنهجية والأرقام والتحليل الإحصائي، بينما تكتفي الكتابة عن العلوم بفكرة جوهرية مبسطة (Simple idea).",
                en: "Scientific writing inherently contains *complicated*, rigorous details to ensure reproducibility, while Science Writing conveys a simplified core idea."
            }
        },

        // --- أسئلة تعريف العلم والمنهج العلمي (سلايد 11 - 12) ---
        {
            q: {
                ar: "وفقاً للمحاضرة، ما هو التعريف الأكاديمي الدقيق لـ 'العلم' (Science)؟",
                en: "According to the lecture, what is the exact academic definition of 'Science'?"
            },
            opts: {
                ar: ["المعرفة المكتسبة بملاحظة الطبيعة لاكتشاف حقائق وصياغة قوانين قابلة للاختبار", "مجموعة الآراء الشخصية التي يتفق عليها معظم أفراد المجتمع عبر الأجيال", "توقع التطورات التكنولوجية الخيالية غير الموجودة في الواقع الفعلي", "التدوين التاريخي غير الممنهج للاكتشافات المصادفة في الطبيعة"],
                en: ["Knowledge obtained by observing natural events to discover facts and testable laws", "A collection of widely held personal opinions agreed upon over generations", "Anticipating fictional technological advances that do not exist in reality", "Unsystematic historical recording of accidental occurrences in nature"]
            },
            correct: 0,
            hint: {
                ar: "العلم هو المعرفة المبنية على *ملاحظة الطبيعة* لصياغة قوانين وحقائق *قابلة للاختبار والتحقق التجريبي* (Verified or Tested).",
                en: "Science is explicitly defined as knowledge obtained by *observing natural phenomena* to discover facts and formulate *verifiable and testable* principles."
            }
        },
        {
            q: {
                ar: "تتولد المعرفة العلمية الموثوقة بصورة أساسية من خلال:",
                en: "Reliable scientific knowledge is primarily generated through:"
            },
            opts: {
                ar: ["التفكير العلمي القائم على المنهج العلمي المنظم", "الحدس الشخصي غير الخاضع للفحص التجريبي", "القصص المتداولة في الصحف والمجلات العامة", "التكهنات التخيلية حول المستقبل"],
                en: ["Scientific thinking practiced through the systematic scientific method", "Personal intuition unvalidated by empirical testing", "Popular stories circulating in general mass media", "Speculative imaginations regarding future events"]
            },
            correct: 0,
            hint: {
                ar: "تنشأ المعرفة العلمية حصرياً من ممارسة *التفكير العلمي* باستخدام *المنهج العلمي المعتمد* (Scientific Method).",
                en: "Scientific knowledge fundamentally arises from the rigorous practice of *scientific thinking* executed through the *scientific method*."
            }
        },
        {
            q: {
                ar: "يقتصر مفهوم العلم على مجرد جمع المعلومات دون الحاجة لصياغة مبادئ أو قوانين تخضع للاختبار والتحقق.",
                en: "The concept of science is confined to gathering observations without needing to formulate testable laws or principles."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1,
            hint: {
                ar: "خطأ. جوهر العلم هو تحويل الملاحظات إلى *حقائق وقوانين ومبادئ يمكن التحقق منها واختبارها عملياً* (Can be verified or tested).",
                en: "False. The definitive purpose of scientific observation is to uncover facts and construct laws that can be strictly *tested and verified*."
            }
        },

        // --- أسئلة أنواع الملاحظات: الموضوعية والشخصية (سلايد 14 - 15) ---
        {
            q: {
                ar: "ما هو الفارق الجوهري بين الملاحظة الموضوعية (Objective) والملاحظة الشخصية (Subjective)؟",
                en: "What is the fundamental difference between Objective and Subjective observations?"
            },
            opts: {
                ar: ["الموضوعية تبنى على الحقائق المثبتة، بينما الشخصية تبنى على الآراء والمشاعر", "الموضوعية تعتمد على المشاعر الفردية، بينما الشخصية تعتمد على القوانين الفيزيائية", "الموضوعية خاصة بالصحافة، بينما الشخصية خاصة بالمعامل الطبية", "الموضوعية لا يمكن إثبات صحتها، بينما الشخصية يمكن قياسها بدقة دائماً"],
                en: ["Objective is based on proven facts; subjective is based on personal opinions", "Objective relies on feelings; subjective relies on fixed physical laws", "Objective belongs to journalism; subjective is restricted to clinical laboratories", "Objective cannot be proven; subjective is always strictly measurable"]
            },
            correct: 0,
            hint: {
                ar: "الملاحظة الموضوعية تستند إلى *حقيقة قطعية قابلة للإثبات* (Fact)، أما الشخصية فتستند إلى *انطباع أو شعور أو رأي ذاتي* (Opinion).",
                en: "Objective observations are anchored in verifiable *facts*, while subjective observations stem from individual *opinions, values, or feelings*."
            }
        },
        {
            q: {
                ar: "أي نوع من أنواع الملاحظات يمثل الركيزة المقبولة والوحيدة التي يُبنى عليها العلم؟",
                en: "Which type of observation serves as the ONLY acceptable foundation in scientific inquiry?"
            },
            opts: {
                ar: ["الملاحظات الشخصية المستندة للرأي العام", "الملاحظات الموضوعية القائمة على الحقائق", "الملاحظات التكهنية المستوحاة من الخيال", "الملاحظات المبنية على المعتقدات الفلسفية الذاتية"],
                en: ["Subjective observations derived from popular consensus", "Objective observations rooted in verifiable facts", "Speculative observations derived from imagination", "Subjective impressions founded on personal philosophies"]
            },
            correct: 1,
            hint: {
                ar: "العلوم لا تعتمد نهائياً على الآراء الذاتية، بل تعتمد حصراً على *الملاحظات الموضوعية (Objective observations)* القابلة للإثبات.",
                en: "Empirical science relies exclusively upon *objective observations* that can be independently verified and reproduced."
            }
        },
        {
            q: {
                ar: "أي من العبارات الآتية تعتبر مثالاً واضحاً على الملاحظة الموضوعية (Objective Observation)؟",
                en: "Which of the following statements represents an Objective Observation?"
            },
            opts: {
                ar: ["الصيف هذا العام كان قصيراً جداً", "الرمز الكيميائي للماء هو H2O", "مادة الكيمياء تبدو ممتعة للغاية اليوم", "الأغاني الفلكلورية القديمة مريحة للأعصاب"],
                en: ["The summer season was exceedingly short this year", "The chemical formula of water is H2O", "Chemistry feels very exciting today", "Traditional folk melodies are very relaxing to listen to"]
            },
            correct: 1,
            hint: {
                ar: "الرمز الكيميائي للماء *حقيقة علمية ثابتة ومحددة بدقة (Fact)* وليست مسألة ذوق شخصي، لذا فهي ملاحظة موضوعية تماماً.",
                en: "Water being H2O is a strictly defined, empirically proven *fact*, qualifying it unequivocally as an objective observation."
            }
        },
        {
            q: {
                ar: "تصنف جملة 'العلوم تبدو مسلية اليوم!' على أنها ملاحظة موضوعية لأنها تصف تجربة داخل الفصل الدراسي.",
                en: "The statement 'Science looks like fun today!' is classified as an objective observation because it describes classroom experience."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1,
            hint: {
                ar: "خطأ. الجملة تعبر عن *شعور ورأي شخصي* (Subjective opinion) يختلف من طالب لآخر ولا يمثل حقيقة علمية قابلة للقياس والإثبات.",
                en: "False. This statement reflects a subjective *feeling or opinion*, which cannot be strictly proven or universally standardized as a fact."
            }
        },
        {
            q: {
                ar: "أي من الجمل التالية يصنف على أنه ملاحظة شخصية (Subjective Observation)؟",
                en: "Which of the following is classified as a Subjective Observation?"
            },
            opts: {
                ar: ["الدقيقة الواحدة تحتوي على ستين ثانية", "الماء النقي يغلي عند مئة درجة مئوية تحت الضغط القياسي", "درجة حرارة الغرفة الحالية تبلغ 25 درجة مئوية", "أجواء الشتاء في المدينة تشعرك بالكآبة"],
                en: ["There are sixty seconds in a standard minute", "Pure water boils at 100°C under normal atmospheric pressure", "The ambient temperature of the room measures 25°C", "Winter weather in the city feels gloomy and depressing"]
            },
            correct: 3,
            hint: {
                ar: "الشعور بالكآبة هو *انطباع وقيمة عاطفية شخصية (Feeling/Value)*، في حين أن الثواني ودرجات الحرارة حقائق موضوعية مقاسة بالأرقام.",
                en: "Feeling gloomy is an individual affective appraisal (opinion/feeling), whereas time units and temperatures are measured physical facts."
            }
        },

        // --- أسئلة عن مفهوم البحث والتدقيق العلمي (سلايد 16، 17، 36) ---
        {
            q: {
                ar: "ماذا يُقصد بالبحث العلمي (Research) وفقاً لتعريف المقرر؟",
                en: "What is meant by 'Research' according to the course definition?"
            },
            opts: {
                ar: ["عملية منهجية لجمع وتحليل وتفسير المعلومات لحل مشكلة أو بناء معرفة", "طرح فرضيات خيالية لا تشترط الإثبات أو التجربة المعملية", "كتابة مقالات في المجلات العامة لنقل الأخبار السريعة للمجتمع", "نقل وتكرار التجارب الدراسية المعروفة النتائج مسبقاً دون إضافة جديدة"],
                en: ["A systematic process of collecting, analyzing, and interpreting data to solve problems", "Proposing fictional hypotheses without requirements for empirical verification", "Drafting general magazine columns to report breaking news to the public", "Replicating standard student lab experiments without producing new insights"]
            },
            correct: 0,
            hint: {
                ar: "البحث هو عملية *منهجية ومنظمة (Systematic process)* تهدف إلى الإجابة عن التساؤلات، حل المشكلات، أو التوصل إلى معارف جديدة.",
                en: "Research is formally defined as the *systematic process* of collecting, analyzing, and interpreting information to generate knowledge or solve problems."
            }
        },
        {
            q: {
                ar: "حتى وإن بدت الإجابة عن تساؤل ما بديهية ومنطقية، تظل معرفتنا مجرد تخمين أو حدس ما لم تُخضع لـ:",
                en: "Even if an answer appears obvious or common sense, our knowledge remains guesswork until subjected to:"
            },
            opts: {
                ar: ["التصويت واستطلاعات الرأي بين غير المتخصصين", "الفحص والتدقيق العلمي الصارم", "النشر الفوري على وسائل التواصل الاجتماعي", "الصياغة بأسلوب قصصي جذاب وشيق"],
                en: ["Informal public polls and majority voting", "Rigorous scientific scrutiny and systematic testing", "Immediate dissemination across public media channels", "Formatting into an emotionally captivating narrative"]
            },
            correct: 1,
            hint: {
                ar: "بدون *التدقيق والفحص العلمي الصارم (Rigorous scientific scrutiny)*، تظل أي معلومة غير موثقة مجرد حدس أو تخمين شخصي (Guesswork).",
                en: "Knowledge unsupported by *rigorous scientific scrutiny* remains mere intuition or unverified guesswork, no matter how obvious it seems."
            }
        },
        {
            q: {
                ar: "أي من الآتي ليس من الأهداف الجوهرية الأربعة للبحث العلمي؟",
                en: "Which of the following is NOT one of the four core purposes of research?"
            },
            opts: {
                ar: ["اكتشاف معلومات وحقائق جديدة غير مسبوقة", "التوسع في المعارف الحالية والبناء عليها", "تأليف قصص خيالية مسلية لا تطابق الواقع الطبيعي", "اختبار الفرضيات النظرية وحل المشكلات الواقعية"],
                en: ["Discovering unprecedented information and novel facts", "Expanding and critically building upon existing knowledge", "Composing entertaining fictional narratives detached from reality", "Testing formal hypotheses and solving real-world practical challenges"]
            },
            correct: 2,
            hint: {
                ar: "الأهداف الأربعة هي: (اكتشاف معلومات جديدة، التوسع في المعرفة، حل المشكلات العملية، واختبار الفرضيات). تأليف الخيال ليس هدفاً للبحث العلمي.",
                en: "The 4 core research purposes are discovering info, expanding knowledge, solving practical issues, and testing hypotheses. Fiction is not one."
            }
        },

        // --- أسئلة سمات ووثائق الكتابة العلمية (سلايد 6، 7) ---
        {
            q: {
                ar: "ما هي الميزة التي تعني في الكتابة العلمية: 'الموضوعية، وتوخي الدقة، واستخدام الألفاظ المحددة تماماً'؟",
                en: "Which feature of scientific writing denotes objectiveness, attention to detail, and exact language?"
            },
            opts: {
                ar: ["الدقة التامة (Precision)", "الأسلوب السردي (Narrative)", "اللغة غير الرسمية (Informal)", "الخيال التكهني (Speculation)"],
                en: ["Scientific Precision", "Narrative Storytelling", "Informal Tone", "Speculative Fiction"]
            },
            correct: 0,
            hint: {
                ar: "مفهوم *الدقة (Precision)* يتضمن الموضوعية، الاهتمام بالتفاصيل، واستخدام لغة قاطعة ومحددة المعنى تماماً دون تأويل.",
                en: "*Precision* in academic communication specifically comprises objectiveness, meticulous attention to detail, and exact vocabulary."
            }
        },
        {
            q: {
                ar: "تعد 'مراجعة الأقران' (Peer Reviews) خطوة اختيارية وغير هامة في تقييم المقالات والأوراق العلمية قبل نشرها.",
                en: "Peer review is an optional and insignificant procedure in validating research manuscripts prior to publication."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 1,
            hint: {
                ar: "خطأ. مراجعة الأقران (Peer Reviews) هي *ركيزة جوهرية أساسية* لضمان صحة ومنهجية وقوة الأبحاث العلمية قبل اعتمادها للنشر.",
                en: "False. Peer review is an indispensable cornerstone of scientific integrity, ensuring quality, validity, and methodological soundness."
            }
        },
        {
            q: {
                ar: "أي من الوثائق التالية يعتبر وسيلة معتمدة لتقديم نتائج البحث العلمي المكتوب؟",
                en: "Which of the following documents is recognized as a valid medium for presenting written scientific work?"
            },
            opts: {
                ar: ["الروايات الخيالية المنشورة في دور النشر الأدبية", "الرسائل الجامعية والمقالات المحكمة وتقارير المشاريع", "المقالات الإخبارية غير الموثقة في الصحف الصفراء", "المذكرات الشخصية اليومية غير المنشورة"],
                en: ["Fictional literature released by speculative publishing houses", "Theses, peer-reviewed articles, and research proposals", "Sensationalist journalistic essays lacking documentation", "Private personal journals kept without methodological records"]
            },
            correct: 1,
            hint: {
                ar: "الوثائق العلمية الرسمية تشمل: *المقالات البحثية (Articles)، الرسائل (Thesis)، المقترحات (Proposals)، والتقارير (Reports)*.",
                en: "Formal scientific documents strictly encompass articles, theses, dissertations, project proposals, and structured lab reports."
            }
        },

        // --- أسئلة كتابة الخيال العلمي والتاريخ والتطور (سلايد 10، 20 - 25) ---
        {
            q: {
                ar: "تتميز كتابة الخيال العلمي (Science-Fiction Writing) بأنها تتناول غالباً:",
                en: "Science-Fiction writing is primarily distinguished by exploring themes such as:"
            },
            opts: {
                ar: ["البروتوكولات المعملية المطبقة حالياً في التحاليل السريرية", "عناصر خيالية لا وجود لها بالواقع مثل السفر بالزمن والاستنساخ", "توثيق القياسات الإحصائية الحقيقية لحساب سرعة الضوء", "تاريخ الحضارات القديمة المعتمد على البرديات الأثرية فقط"],
                en: ["Routine standard protocols currently executed in diagnostic clinics", "Imagined speculative concepts like time travel and advanced cloning", "Tabulating observed statistical data to measure the speed of light", "Purely historical documentation of archaeology from papyrus texts"]
            },
            correct: 1,
            hint: {
                ar: "الخيال العلمي هو أدب *تكهني وتخيلي* (Speculative fiction) يعالج أفكاراً لا وجود لها في عالمنا الحاضر كالسفر عبر الفضاء والزمن.",
                en: "Science fiction is a speculative genre built upon imaginative components currently absent from physical reality, like time dilation travel."
            }
        },
        {
            q: {
                ar: "ارتبطت نشأة وتطور الحضارات الإنسانية قديماً بظهور مهارة محورية هامة هي:",
                en: "Historically, the emergence of advanced human civilization was closely marked by:"
            },
            opts: {
                ar: ["الاستخدام المكثف للتدوين وحفظ السجلات بما في ذلك الكتابة", "الانعزال التام عن المحيط الزراعي وعدم استئناس الحيوانات", "الاعتماد الحصري على الآراء الشخصية وتجاهل مراقبة الطبيعة", "التوقف عن استخلاص العلاجات من النباتات الطبيعية"],
                en: ["Extensive record-keeping systems, prominently including writing", "Complete social isolation and refraining from animal domestication", "Exclusive reliance on subjective beliefs while ignoring nature", "Terminating the medical utilization of natural plant derivatives"]
            },
            correct: 0,
            hint: {
                ar: "تُعرَّف الحضارة بحدوث تقدم فكري ومادي واستخدام موسع لـ *حفظ السجلات والكتابة (Record-keeping, including writing)* وتأسيس المعاهد المنظمة.",
                en: "Civilization is historically marked by intellectual advancement and the institutionalized implementation of *record-keeping and writing*."
            }
        },
        {
            q: {
                ar: "تاريخياً، تطور علم الأدوية من خلال استخدام المصادر النباتية، ثم استخلاص الخلاصات الخام، وصولاً إلى:",
                en: "Historically, pharmaceutical science advanced from selecting crude plant sources up to:"
            },
            opts: {
                ar: ["التخلي عن الفحص المخبري والاعتماد على السحر القديم", "إجراء تعديلات كيميائية انتقائية على بنية الجزيئات الفعالة", "حظر دراسة التركيب البنائي للمنتجات الطبيعية نهائياً", "الاعتماد فقط على الملاحظات الشخصية غير القابلة للاختبار"],
                en: ["Abandoning empirical purification in favor of ancient mysticism", "Executing selective chemical modifications on active molecules", "Prohibiting structural characterization of natural bio-products", "Relying exclusively on untestable subjective personal feelings"]
            },
            correct: 1,
            hint: {
                ar: "تطور الدواء بدأ من اختيار النبات، ثم استخلاص المركبات الخام، وأخيراً *التعديل الكيميائي الانتقائي للمركبات الطبيعية* لزيادة فعاليتها.",
                en: "Drug development progressed through discovering plant sources, extracting crude fractions, and making *selective molecular modifications*."
            }
        },

        // --- أسئلة عن قوس قصة البحث العلمي (سلايد 38) ---
        {
            q: {
                ar: "في مخطط قوس قصة البحث العلمي (The Research Story Arc)، ماذا تمثل مرحلة الذروة (Climax)؟",
                en: "In 'The Research Story' narrative diagram, what corresponds to the 'Climax'?"
            },
            opts: {
                ar: ["استعراض الدراسات السابقة وتحديد المشكلة", "تصميم منهجية البحث وأدوات التجربة المعملية", "تفسير البيانات والتوصل إلى النتائج والاكتشافات", "صياغة التوصيات والمقترحات الختامية للدراسات المستقبلية"],
                en: ["Reviewing background literature and defining primary questions", "Formulating experimental design and practical methodologies", "Interpreting experimental data and discovering the key findings", "Drafting final future recommendations and research closure"]
            },
            correct: 2,
            hint: {
                ar: "ذروة الورقة العلمية (Climax) هي *تفسير البيانات وعرض النتائج المكتشفة (Data Interpretation and Findings)* لأنها تمثل الإجابة المنتظرة للبحث.",
                en: "The *Climax* of the research story corresponds strictly to the central breakthrough: *Data Interpretation and core Findings*."
            }
        },
        {
            q: {
                ar: "تمثل مرحلة الحل أو الختام (Resolution) في قصة البحث العلمي:",
                en: "The 'Resolution' phase at the conclusion of the Research Story represents the:"
            },
            opts: {
                ar: ["التوصيات النهائية للمشروع البحثي", "خطة العمل وتصميم المنهجية المتبعة", "وصف المشكلة والخلفية النظرية للبحث", "الصراع الناشئ بين النظريات المتضاربة"],
                en: ["Final practical recommendations and closure", "Methodological design and execution plan", "Problem definition and initial theoretical context", "Emerging conflict between conflicting previous theories"]
            },
            correct: 0,
            hint: {
                ar: "تصل قصة البحث العلمي إلى الحل والختام عند نقطة *التوصيات (Recommendations)* الناتجة عن مخرجات الدراسة.",
                en: "The dramatic arc of a research manuscript resolves at the *Recommendations* (Resolution) derived from the findings."
            }
        },
        {
            q: {
                ar: "تعتبر مرحلة تصميم البحث والمنهجية المتبعة (Methodology) هي مرحلة تصاعد الأحداث (Rising Action) في الورقة العلمية.",
                en: "The research design and methodology section serves as the 'Rising Action' in the narrative structure of a paper."
            },
            opts: {
                ar: ["صح", "خطأ"],
                en: ["True", "False"]
            },
            correct: 0,
            hint: {
                ar: "صح. في مخطط قصة البحث، تقع خطة البحث ومنهجية العمل في مرحلة *تصاعد الأحداث (Rising Action)* التي تقودنا نحو النتائج والذروة.",
                en: "True. Research design and methodology constitute the *Rising Action* building the technical framework toward the findings climax."
            }
        }
    ]
});
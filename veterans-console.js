(function () {
    const benefitGroups = {
        workLife: {
            label: "Work-Life",
            items: [
                {
                    title: "Flexible Work Schedules",
                    description: "Many federal employers offer flexible schedules, compressed workweeks, alternative schedules, and flexible start or end times to help employees balance personal and professional responsibilities."
                },
                {
                    title: "Telework Opportunities",
                    description: "Telework programs may allow eligible employees to work from home or remote locations, reducing commute time while supporting work-life balance."
                },
                {
                    title: "Generous Paid Leave",
                    description: "Federal employees may receive annual leave, sick leave, paid holidays, family and medical leave, parental leave, and other special leave options."
                },
                {
                    title: "Flexible Retirement Options",
                    description: "Federal employment can include retirement planning through pension-style benefits and defined contribution savings options."
                },
                {
                    title: "Alternative Work Arrangements",
                    description: "Some positions may support part-time work, job sharing, or phased retirement as employee needs change."
                }
            ]
        },
        healthCare: {
            label: "Healthcare",
            items: [
                {
                    title: "Comprehensive Health Insurance",
                    description: "Federal employees can often choose from multiple health insurance plans covering medical care for employees, retirees, and eligible family members."
                },
                {
                    title: "Dental and Vision Insurance",
                    description: "Optional dental and vision plans may provide preventive care, major procedure coverage, and eyewear benefits."
                },
                {
                    title: "Life Insurance Options",
                    description: "Group life insurance options may include basic, optional, and family coverage for financial security."
                },
                {
                    title: "Long-Term Care Insurance",
                    description: "Long-term care options may help cover services such as nursing homes, assisted living, and in-home care."
                },
                {
                    title: "HSA and FSA Options",
                    description: "Eligible employees may use tax-advantaged health savings or flexible spending accounts for qualified medical, dental, and vision expenses."
                }
            ]
        },
        childCare: {
            label: "Child Care",
            items: [
                {
                    title: "Child Care Subsidy",
                    description: "Some agencies offer child care subsidy programs to help eligible employees reduce out-of-pocket child care costs."
                },
                {
                    title: "On-Site Child Care",
                    description: "Some workplaces may offer on-site or nearby child care centers for convenient drop-off and pick-up."
                },
                {
                    title: "Dependent Care FSA",
                    description: "Dependent care flexible spending accounts may allow pre-tax dollars to pay eligible child care and elder care expenses."
                },
                {
                    title: "Back-Up Care",
                    description: "Back-up care programs can help employees manage temporary child care needs when regular care is unavailable."
                },
                {
                    title: "Parental Leave",
                    description: "Eligible employees may receive paid parental leave to bond with a new child through birth, adoption, or foster care placement."
                }
            ]
        },
        mentalHealth: {
            label: "Wellness",
            items: [
                {
                    title: "Employee Assistance Programs",
                    description: "Employee Assistance Programs may provide confidential counseling, support, and resources for personal or professional challenges."
                },
                {
                    title: "Preventive Health Programs",
                    description: "Wellness programs may include screenings, fitness resources, nutrition support, and stress-reduction workshops."
                },
                {
                    title: "Mental Health Resources",
                    description: "Health plans may include behavioral health, mental health, and substance abuse support with privacy protections."
                },
                {
                    title: "Stress Management",
                    description: "Some workplaces offer training to help employees manage stress, build resilience, and respond to work-related pressure."
                },
                {
                    title: "Fitness and Wellness",
                    description: "Fitness centers, group activities, wellness challenges, and mindfulness resources may support overall well-being."
                }
            ]
        }
    };

    const faqEntries = [
        {
            question: "Is there a maximum entry age for federal employment?",
            answer: "Most federal jobs do not have a maximum entry age. Certain law enforcement or homeland security roles may have age cutoffs because of physical demands. The job announcement will list those requirements."
        },
        {
            question: "How do I know which jobs I am qualified for?",
            answer: "Compare your work history, military experience, education, skills, and certifications to the qualifications in each job announcement. Strong applications clearly match your experience to the required duties."
        },
        {
            question: "What if I have little or no civilian job experience?",
            answer: "Military experience can still translate into leadership, operations, logistics, safety, customer service, technical, or administrative qualifications. Entry-level, trainee, aide, apprentice, learner, and assistant roles may also provide a starting point."
        },
        {
            question: "What is Veterans Employment Assistance?",
            answer: "Veterans Employment Assistance provides free video resources for veterans preparing for career transition, federal employment readiness, and job-search planning."
        },
        {
            question: "How soon can I start applying for jobs?",
            answer: "You can start as soon as your resume, supporting documents, and target job announcements are ready. For federal applications, always review the announcement, required documents, and closing date before applying."
        }
    ];

    const modes = {
        orientation: {
            kicker: "Start here",
            title: "Orientation Video",
            lead: "A short starting point for using Veterans Employment Assistance video resources.",
            icon: "fa-play-circle",
            visual: "Orientation Video",
            actions: ""
        },
        manual: {
            kicker: "Guide",
            title: "Orientation Manual Walkthrough",
            lead: "A guided video will walk through the orientation manual without making users hunt through documents.",
            icon: "fa-book-open",
            visual: "Manual Walkthrough",
            actions: ""
        },
        ai: {
            kicker: "Practical AI use",
            title: "AI Career Guidance",
            lead: "A future video will show realistic ways veterans can use AI for planning, wording, and preparation.",
            icon: "fa-lightbulb",
            visual: "AI Career Guidance",
            actions: ""
        },
        benefits: {
            compactSelector: true,
            selectorLabel: "Benefits selector",
            icon: "fa-landmark",
            visual: benefitDetailMarkup("workLife", 0),
            visualType: "detail",
            actions: benefitsMarkup("workLife", 0)
        },
        faq: {
            compactSelector: true,
            selectorLabel: "FAQ selector",
            icon: "fa-question-circle",
            visual: faqDetailMarkup(0),
            visualType: "detail",
            actions: faqMarkup(0)
        },
        federal: {
            kicker: "Separate pathway",
            title: "Affiliate Programs",
            lead: "Federal Employment Assistance is a program that offers services including resume creation tools and a free course to help you navigate the federal hiring process.",
            icon: "fa-route",
            visual: "Affiliate Programs",
            actions: '<a class="console-primary-action" href="../federalEmploymentAssistanceWebsite/index.html">Visit Federal Employment Assistance</a><span class="console-muted-action">Visit Federal Employment Assistance for more details.</span>'
        }
    };

    const modeButtons = Array.from(document.querySelectorAll(".console-mode"));
    const visual = document.getElementById("consoleVisual");
    const kicker = document.getElementById("consoleKicker");
    const title = document.getElementById("console-title");
    const lead = document.getElementById("consoleLead");
    const actions = document.getElementById("consoleActions");
    const panel = document.getElementById("consolePanel");

    function benefitsMarkup(activeGroupKey, activeIndex) {
        const activeGroup = benefitGroups[activeGroupKey] || benefitGroups.workLife;
        const activeItem = activeGroup.items[activeIndex] || activeGroup.items[0];
        const groupChips = Object.keys(benefitGroups).map(key => {
            const activeClass = key === activeGroupKey ? " is-active" : "";
            const pressed = key === activeGroupKey ? "true" : "false";
            return `<button class="console-chip${activeClass}" type="button" data-benefit-group="${key}" aria-pressed="${pressed}">${benefitGroups[key].label}</button>`;
        }).join("");
        const itemChips = activeGroup.items.map((item, index) => {
            const activeClass = index === activeIndex ? " is-active" : "";
            const pressed = index === activeIndex ? "true" : "false";
            return `<button class="console-chip console-chip-soft${activeClass}" type="button" data-benefit-item="${index}" data-benefit-group="${activeGroupKey}" aria-pressed="${pressed}">${item.title}</button>`;
        }).join("");

        return `<div class="console-selector-summary"><span>Viewing</span><strong>${activeGroup.label} / ${activeItem.title}</strong><small>Choose an area or benefit. Details update on the left.</small></div><div class="console-selector-label">Area</div><div class="console-chip-row">${groupChips}</div><div class="console-selector-label console-selector-label-secondary">Specific benefit</div><div class="console-chip-row console-chip-row-secondary">${itemChips}</div>`;
    }

    function faqMarkup(activeIndex) {
        const activeFaq = faqEntries[activeIndex] || faqEntries[0];
        const chips = faqEntries.map((faq, index) => {
            const activeClass = index === activeIndex ? " is-active" : "";
            const pressed = index === activeIndex ? "true" : "false";
            return `<button class="console-chip${activeClass}" type="button" data-faq-index="${index}" aria-pressed="${pressed}">${faq.question}</button>`;
        }).join("");

        return `<div class="console-selector-summary"><span>Viewing</span><strong>${activeFaq.question}</strong><small>Select another question. The answer updates on the left.</small></div><div class="console-selector-label">Question</div><div class="console-chip-row">${chips}</div>`;
    }

    function benefitDetailMarkup(activeGroupKey, activeIndex) {
        const activeGroup = benefitGroups[activeGroupKey] || benefitGroups.workLife;
        const activeItem = activeGroup.items[activeIndex] || activeGroup.items[0];

        return `<div class="console-detail-pane"><p class="console-kicker">Federal benefit</p><h2>${activeItem.title}</h2><p>${activeItem.description}</p></div>`;
    }

    function faqDetailMarkup(activeIndex) {
        const activeFaq = faqEntries[activeIndex] || faqEntries[0];

        return `<div class="console-detail-pane"><p class="console-kicker">Quick answer</p><h2>${activeFaq.question}</h2><p>${activeFaq.answer}</p></div>`;
    }

    function renderVisual(mode) {
        if (mode.visualType === "detail") {
            visual.classList.add("is-detail-view");
            visual.innerHTML = mode.visual;
            return;
        }

        visual.classList.remove("is-detail-view");
        visual.innerHTML = `<i class="fas ${mode.icon}" aria-hidden="true"></i><span>${mode.visual}</span>`;
    }

    function renderMode(modeKey) {
        const mode = modes[modeKey] || modes.orientation;

        modeButtons.forEach(button => {
            const isActive = button.dataset.mode === modeKey;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        renderVisual(mode);
        panel.classList.toggle("is-selector-only", Boolean(mode.compactSelector));
        kicker.textContent = mode.compactSelector ? mode.selectorLabel : mode.kicker;
        title.textContent = mode.compactSelector ? "" : mode.title;
        lead.textContent = mode.compactSelector ? "" : mode.lead;
        actions.innerHTML = mode.actions;
        panel.focus({ preventScroll: true });
    }

    actions.addEventListener("click", event => {
        const benefitGroup = event.target.closest("[data-benefit-group]");
        const benefitItem = event.target.closest("[data-benefit-item]");
        const faqItem = event.target.closest("[data-faq-index]");

        if (benefitItem) {
            const groupKey = benefitItem.dataset.benefitGroup;
            const activeIndex = Number(benefitItem.dataset.benefitItem);
            visual.classList.add("is-detail-view");
            visual.innerHTML = benefitDetailMarkup(groupKey, activeIndex);
            actions.innerHTML = benefitsMarkup(groupKey, activeIndex);
            return;
        }

        if (benefitGroup) {
            const groupKey = benefitGroup.dataset.benefitGroup;
            visual.classList.add("is-detail-view");
            visual.innerHTML = benefitDetailMarkup(groupKey, 0);
            actions.innerHTML = benefitsMarkup(groupKey, 0);
            return;
        }

        if (faqItem) {
            const activeIndex = Number(faqItem.dataset.faqIndex);
            visual.classList.add("is-detail-view");
            visual.innerHTML = faqDetailMarkup(activeIndex);
            actions.innerHTML = faqMarkup(activeIndex);
            return;
        }

    });

    modeButtons.forEach(button => {
        button.addEventListener("click", () => renderMode(button.dataset.mode));
    });

    renderMode("orientation");
}());

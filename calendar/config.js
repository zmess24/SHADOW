module.exports = {
    rep: "Zac Messinger",
    repType: "Customer Success Engineer",
    accounts: [
        { title: 'TMAM', value: "Ticketmaster / Live Nation" },
        { title: 'HL', value: "Herbalife" },
        { title: 'AB', value: "Allbound" },
        { title: 'Wynn', value: "Wynn Resorts" },
        { title: 'TB', value: "Taco Bell" },
        { title: 'CS', value: "CS Internal Activities" },
        { title: 'CP', value: "ClaroPay"},
        { title: 'RF', value: "Raymour & Flanigan"},
        { title: "NL", value: "Norton Software"},
        { title: "AA", value: "Alaska Airlines"},
        { title: "SC", value: "Sam's Club"}
    ],
    types: [
        { title: "Administrative Work & Status Call", value: "Administrative Work & Status Call", recordType: "External" },
        { title: "Business Review Call", value: "Business Review Call", recordType: "External" },
        { title: "Call Observation", value: "Call Observation", recordType: "External" },
        { title: "Consultative Call", value: "Consultative Call", recordType: "External" },
        { title: "Executive Business Review", value: "Executive Business Review", recordType: "External" },
        { title: "Insights & Enablement", value: "Guided Insights & Enablement", recordType: "External" },
        { title: "Question Emails", value: "How To Question Emails", recordType: "External" },
        { title: "Insights Brief", value: "Insights Brief", recordType: "External" },
        { title: "Introductory Training", value: "Introductory Training", recordType: "External" },
        { title: "Kickoff Call", value: "Kickoff call", recordType: "External" },
        { title: "Monthly Ongoing Enablement", value: "Monthly Ongoing Enablement", recordType: "External" },
        { title: "Onboarding: Dashboards", value: "Onboarding: Dashboard/reports/alerts creation", recordType: "External" },
        { title: "Onboarding: Event creation", value: "Onboarding: Events creation", recordType: "External" },
        { title: "Onboarding: Integration Work", value: "Onboarding: Integration Work", recordType: "External" },
        { title: "Onboarding: Native Event Creation", value: "Onboarding: Native Event Creation", recordType: "External" },
        { title: "Onboarding: Native PII Remediation", value: "Onboarding: Native PII Remediation", recordType: "External" },
        { title: "Onboarding: PII Remediation", value: "Onboarding: PII Remediation", recordType: "External" },
        { title: "Ongoing: AM", value: "Ongoing: Account Maintenance", recordType: "External" },
        { title: "Ongoing: Dashboards", value: "Ongoing: Dashboard/reports/alerts creation", recordType: "External" },
        { title: "Ongoing: Event creation", value: "Ongoing: Events creation", recordType: "External" },
        { title: "Ongoing: Integration Work", value: "Ongoing: Integration Work", recordType: "External" },
        { title: "Ongoing: Native Event Creation", value: "Ongoing: Native Event Creation", recordType: "External" },
        { title: "Ongoing: Native PII Remediation", value: "Ongoing: Native PII Remediation", recordType: "External" },
        { title: "Ongoing: PII Remediation", value: "Ongoing: PII Remediation", recordType: "External" },
        { title: "Ongoing: Use Case Based Training", value: "Ongoing: Use Case Based Training", recordType: "External" },
        { title: "Onsite Visit", value: "Onsite Visit", recordType: "External" },
        { title: "Proactive Monitoring Insights", value: "Proactive Monitoring Insights", recordType: "External" },
        { title: "Production Support", value: "Production Support", recordType: "External" },
        { title: "Technical call", value: "Technical call", recordType: "External" },
        { title: "Vacation", value: "Vacation", recordType: "Internal" },
        { title: "Holiday", value: "Holiday", recordType: "Internal" },
        { title: "Illness", value: "Illness", recordType: "Internal" },
        { title: "Group/Company Meeting", value: "Group/Company Meeting", recordType: "Internal" },
        { title: "Internal Meetings", value: "Internal Meetings", recordType: "Internal" },
        { title: "Travel", value: "Travel", recordType: "Internal" },
        { title: "Marketing", value: "Marketing", recordType: "Internal" },
        { title: "Presales & Sales", value: "Presales & Sales", recordType: "Internal" },
        { title: "Product Meetings", value: "Product Meetings", recordType: "Internal" },
        { title: "HR", value: "HR", recordType: "Internal" },
        { title: "Product Support", value: "Product Support", recordType: "Internal" }
    ],
    meetings: [
        {
            description: "Holiday",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Holiday"
        },
        {
            description: "CS group meeting",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Email Batching",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        { 
            description: "Taco Bell / Quantum Metric Status (Bi-Weekly)", 
            recordType: "External", 
            account: "Taco Bell",
            type: "Business Review Call"  
        },
        { 
            description: "QM <> Wynn: Weekly Status Call", 
            recordType: "External", 
            account: "Wynn Resorts",
            type: "Business Review Call"  
        },
        { 
            description: "Quantum Touch Base", 
            recordType: "External", 
            account: "Ticketmaster / Live Nation",
            type: "Business Review Call"  
        },
        { 
            description: "Quantum Metric & Herbalife Working Sessions: Operations", 
            recordType: "External", 
            account: "Herbalife",
            type: "Business Review Call" 
        },
        { 
            description: "Zac <> Surge: TMAM Debrief ", 
            recordType: "Internal", 
            account: "Ticketmaster / Live Nation",
            type: "Business Review Call"  
        },
        { 
            description: "[OPTIONAL] JIRA Ticket Prioritization", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "Zac <> Paul: Account Sync", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "Zac <> Gil 1:1", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "Monthly West coast accounts' review", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "Field Eng Showcase & Product Sync", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "Monthly Field Eng Showcase", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "QUANTUM METRIC ALL HANDS", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        { 
            description: "CS Stand-Up / Office Hours", 
            recordType: "Internal", 
            account: "CS Internal Activities",
            type: "Internal Meetings" 
        },
        {
            description: "Sales All-Hands (Mandatory for Sales team",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Zac<>Michal",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "CXellence: Striving for Digital Excellence through Customer Insights Sharing",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "CS All hands",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Zac<>Dishon<>Megi  Weekly Account Alignment Meeting",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Kailey <> Zac Sync",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "QMU: Core Team (req) + Peer Reviewers (opt)",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Taco Bell / Quantum Metric Status (Bi-Weekly)",
            recordType: "External",
            account: "Taco Bell",
            type: "Business Review Call"
        },
        {
            description: "Internal Launch Team Weekly",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Zac <> Collin 1:1",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Field Eng Showcase",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
        {
            description: "***QM ALL HANDS***",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
        {
            description: "Monthly Product :: Review",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
         {
            description: "***Team QM - Weekly Huddle***",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
        {
            description: "CSE MotM - West Coast Edition",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
        {
            description: "Customer Success All Hands",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
        {
            description: "QM <> RF: Recurring Meeting",
            recordType: "External",
            account: "Raymour & Flanigan",
            type: "Business Review Call"
        },
        {
            description: "All-CSE Meeting of the Minds ",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Group/Company Meeting"
        },
        {
            description: "Zac / Francis",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "QM<>HL OC - Bi-Weekly Touchpoint",
            recordType: "External",
            account: "Herbalife",
            type: "Status/AM call"
        },
        {
            description: "QM <> Wynn: UX Bi-Weekly Status Call",
            recordType: "External",
            account: "Wynn Resorts",
            type: "Status/AM call"
        },
        {
            description: "Quantum Metric Office Hours",
            recordType: "External",
            account: "Norton Software",
            type: "Status/AM call"
        },
        {
            description: "QM<> Herbalife: Monthly Touch Point",
            recordType: "External",
            account: "Herbalife",
            type: "Status/AM call"
        },
        {
            description: "Weekly Sync",
            recordType: "External",
            account: "Norton Software",
            type: "Status/AM call"
        },
        {
            description: "QM + Alaska Weekly Sync",
            recordType: "External",
            account: "Alaska Airlines",
            type: "Status/AM call"
        },
        {
            description: "NortonLifeLock Quantum Review of CH1 results",
            recordType: "External",
            account: "Norton Software",
            type: "Business Review Call"
        },
        {
            description: "QM/AS Office Hours ",
            recordType: "External",
            account: "Alaska Airlines",
            type: "Status/AM call"
        },
        {
            description: "CSE West Team Sync",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        {
            description: "Quantum Metric Claro Pay",
            recordType: "External",
            account: "ClaroPay",
            type: "Business Review Call"
        },
        {
            description: "Sams Internal Sync",
            recordType: "External",
            account: "Sam's Club",
            type: "Business Review Call"
        },
        {
            description: "R&F Internal",
            recordType: "Internal",
            account: "Raymour & Flanigan",
            type: "Internal Meetings"
        },
        {
            description: "Sam's CSE Internal Touchpoint",
            recordType: "Interal",
            account: "Sam's Club",
            type: "Internal Meetings"
        },
        {
            description: "CSE Strategic Initiatives",
            recordType: "Interal",
            account: "Sam's Club",
            type: "Internal Meetings"
        },
        {
            description: "Internal Alaska Sync",
            recordType: "Interal",
            account: "Alaska Airlines",
            type: "Internal Meetings"
        },
        {
            description: "Sam's Club CSE - Weekly Alignment",
            recordType: "Interal",
            account: "Sam's Club",
            type: "Internal Meetings"
        },
        {
            description: "Quantum Metric | Sam's - Analytics Sync",
            recordType: "External",
            account: "Sam's Club",
            type: "Administrative Work & Status Call"
        }, {
            description: "Zac<>Hugo:: QM/HITSS Connect",
            recordType: "External",
            account: "ClaroPay",
            type: "Business Review Call"
        }
    ],
}




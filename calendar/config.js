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
        { title: "Ongoing: Events Creation", value: "Ongoing: Events Creation", recordType: "External" },
        { title: "Ongoing: Dashboards", value: "Ongoing: Dashboards/Alerts/Report Creation", recordType: "External" },
        { title: "Ongoing: PII", value: "Ongoing: PII Remediation", recordType: "External" },
        { title: "Onboarding: Events Creation", value: "Onboarding: Events Creation", recordType: "External" },
        { title: "Onboarding: Dashboards", value: "Onboarding: Dashboards/Alerts/Report Creation", recordType: "External" },
        { title: "Ongoing: AM", value: "Ongoing: Account Maintenance", recordType: "External" },
        { title: "Technical Call", value: "Technical Call", recordType: "External" },
        { title: "Business Review Call", value: "Business Review Call", recordType: "External" },
        { title: "Kickoff Call", value: "Kickoff Call", recordType: "External" },
        { title: "Onsite Visit", value: "Onsite Visit", recordType: "External" },
        { title: "Training", value: "Value-Based Training", recordType: "External" },
        { title: "Reports/Scoping/Analysis", value: "Reports/Scoping/Analysis", recordType: "External" },
        { title: "Office Hours/Value Added Call", value: "Office Hours/Value Added Call", recordType: "External" },
        { title: "Production Support", value: "Production Support", recordType: "External" },
        { title: "Status/AM call", value: "Status/AM call", recordType: "External" },
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
        }
    ],
}



// business review call
// kickoff call
// client call
// onboarding: dashboard/reports/alerts creation
// onboarding: events creation
// onboarding: integration work
// onboarding: native event creation
// onboarding: native pii remediation
// onboarding: pii remediation
// onboarding training
// ongoing: account maintenance
// ongoing: dashboard/reports/alerts creation
// ongoing: events creation
// ongoing: integration work
// ongoing: native event creation
// ongoing: native pii remediation
// ongoing: pii remediation
// onsite visit
// production support
// qbr
// reports/scoping
// research - existing customer analysis
// research - pov analysis
// Status/AM call
// technical call

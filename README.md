<p align="center">
  <img src="https://static.thenounproject.com/png/29520-200.png" width="200"/>
</p>


# S.H.A.D.O.W

> The purpose of SHADOW (**S**alesForce **H**eadless **A**utomate**d** **O**ccurence **W**riter)is to automate the process of logging hours in SalesForce for the Quantum Metric CS team. SHADOW relies on two main processes: 

1. Scraping a users Google Calender and then parsing the events into a formatted JSON file.
2. Logging into SalesForce via a headless browser, and recording each JSON object as a CS activity. 

## Table of Contents

1. Installation
2. Configuration
3. Usage
4. Contributions
5. Q&A

--- 

# Installation 

Please check your version of OS X before you begin. (Click the Apple icon in the upper left corner and choose About this Mac). The following installation procedures should work for Mavericks, Yosemite, or Mojave. All of the below commands need to be entered via the command line.

### 1. Xcode 

```
xcode-select --install
```

### 2. Homebrew

#### Install Homebrew

In Terminal:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```

#### Brew Doctor

In Terminal:

```
brew doctor

```

### 3. Node.js

You will need Node to run this application. To download the latest version. click [here](https://nodejs.org/en/download/)

--- 

# Configuration

Before you can start using SHADOW, there are three files that need to be altered.

#### `.env`

Create a `.env` file in the root of the SHADOW directory to hold your SF username & password. Copy and paste the following code into the file, replacing the values to the right of the `=` sign with your own login credientials:

```
username=username_goes_here
password=password_goes_here
```

#### `credentials.json`

This file holds the credentials for accessing your individual instance of Google Calendar. To download the contents for this file, head to the [link](https://developers.google.com/calendar/quickstart/nodejs), click on the `ENABLE THE GOOGLE CALENDAR API` button, and then click the `DOWNLOAD CLIENT CONFIGURATION` button. This will download a `credentials.json` file that you can simply copy and paste into the existing one within SHADOW's root directory.

#### `token.json`

A `token.json` file will automatically be added to the root of the SHADOW directory upon completion of the autorization flow for the first time. **You do not need to do anything for this step**.

#### `calendar/config.json`

This file holds the relevant parsing information for downloading events from Google Calender and reformatting them into JSON objects. There are three sections that will require some custom configuration:

* **rep** - Replace the value here with your name _EXACTLY_ as it appears in SalesForce.
```js
    rep: "Zac Messinger"
```
* **accounts** - Contains an array of objects with key/value pairs for each account abbreviation (title), and full name (value). Make sure that the value string matches the account name _EXACTLY_ as it appears in SalesForce. The `title` property is the abbreviation you would like to use within Goolge Calender for the account (This is expanded upon in the usage section below).
```js
    accounts: [
        { title: 'TMAM', value: "Ticketmaster / Live Nation", },
        { title: 'HL', value: "Herbalife", },
        { title: 'AB', value: "Allbound", },
        { title: 'Wynn', value: "Wynn Resorts", },
        { title: 'TB', value: "Taco Bell", }
    ],
```
* **meetings** - Contains an array of your weekly/monthly reoccuring meetings (client status calls, 1:1's, internal company meetings, ect).
    * The `description` property is the name of the meeting.
    * The `recordType` property describes if the meeting is External or Internal Facing.
    * The `account` property lists what client the meeting is associated with.
```js
    meetings: [
        {
            description: "Holiday",
            recordType: "Internal",
            account: "CS Internal Activites",
            type: "Holiday"
        },
        {
            description: "CS group meeting",
            recordType: "Internal",
            account: "CS Internal Activities",
            type: "Internal Meetings"
        },
        { 
            description: "Taco Bell / Quantum Metric Status (Weekly)", 
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
            description: "Zac <> Dishon Weekly Account Alignment Meeting",
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
        }
    ]
```

# Usage
# Contributions
# Q&A
# Coming Soon
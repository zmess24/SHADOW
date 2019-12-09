# SHADOW (**S**alesForce **H**eadless **A**utomate**d** **O**ccurence **W**riter)

The purpose of SHADOW is to automate the process of logging hours in SalesForce for the Quantum Metric CS team. SHADOW relies on two main processes: 

1. Scraping a users Google Calender and then parsing the events into a formatted JSON file.
2. Logging into SalesForce via a headless browser, and recording each JSON object as a CS activity. 

## Table of Contents

1. Installation
2. Configuration
3. Usage
4. Contributions
5. Q&A

--- 

## 1. Installation 

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
--- 

## 2. Configuration

Before you can start using SHADOW, there are three files that need to be altered.

#### `.env`

The `.env` file holds your username and password combination for logging into SalesForce. Replace the values to the right of the equal signs (with no spaces) for each respectivly.

#### `credentials.json`

This file holds the credentials for accessing your individual instance of Google Calendar. To download the contents for this file, head to the [link](https://developers.google.com/calendar/quickstart/nodejs), click on the "ENABLE THE GOOGLE CALENDAR API" button, and then click the "DOWNLOAD CLIENT CONFIGURATION" button. This will download a `credentials.json` file that you can simply copy and paste into the existing one within SHADOW's root directory.

#### `token.json`


#### `weeks/config.json`

This file holds the relevant parsing information for downloading events from Google Calender and reformatting them into JSON objects. There are three sections that will require some custom configuration:

* rep - Replace the value here with your name _EXACTLY_ as it appears in SalesForce.
* accounts - Contains an array of objects with key/value pairs for each account abbreviation (title), and full name (value). Make sure that the value string matches the account name _EXACTLY_ as it appears in SalesForce.
* meetings - Contains an array of your weekly/monthly reoccuring meetings (client status calls, 1:1's, internal company meetings, ect).

## 3. Usage
## 4. Contributions
## 5. Q&A
## 6. Coming Soon
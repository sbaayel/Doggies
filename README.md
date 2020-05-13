# Doggies
Doggies web-application project
- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Dggies web application** is a responsive web application that will allow the client put a dog from a shelter up for adoption along with this the client will be able to edit the dtails of the dog they put up for adoption ._

### Core Features

_The web application will give the client an simple but interactive UI that has the following core features _

- _UI that fits multiple screens,_
- _Implement basic CRUD functionalities like._
- _User can add to database ._
- _Use can delete added item from database._
- _User can edit added item in database._
### Goals

- _Allow user creater a user account ,_
- _Allow user to Add a dog / dog's info ._
- _Allow uer to adopt a dog._
- _Allow you to view dogs details._


### Team

Created, designed, and developed by [SEBASTIAN BAAYEL](https://github.com/SEBAAYEL) for the General Assembly Software Engineering Immersive (February '20 Cohort) Unit 4 Project.

<br>

## MVP

_The Minimum Viable Product for the **Doggies web application** to deploy function web application based on all the basic CRUD funtionalities list and website features stated above .._

### Client (Front End)

#### Wireframes

- Desktop Views

![https://xd.adobe.com/view/1023db00-dc3a-4ad8-52ab-bfec8b116daf-6612/]

- Ipad views

![https://xd.adobe.com/view/dfe74ab0-4f16-4bef-4cb5-c8daa28e0c97-a9d6/]

- Mobile views

![https://xd.adobe.com/view/6e4f47a4-5aad-4648-519f-614e2454cae5-187e/]



#### Component Hierarchy



``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Header.jsx
      |__ Header.css
      |__ Main.jsx
      |__ Main.css
      |__ Footer.jsx
      |__ Footer.css
      |__ Login.jsx
      |__ Login.css
      |__ Subscribe.jsx
      |__ Subscribe.css
      |__ CreateDog.jsx
      |__ CreateDog.css
      |__ ShowDog.jsx
      |__ ShowDog.css
      |__ UpdateDog.jsx
      |__ UpdateDog.css
|__ services/
      |__ api-helper.jsx
|__ App.js
|__ App.css
|__ index.js
|__ README
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Login      |   class    |   y   |   n   | _The login  will render the login form._                         |
|   Subscribe  |   class    |   y   |   n   | _This  will render the signup form._                             |
|    ShowDog   | functional |   n   |   n   | _This  will contain the info of the created dog._                |
|   Main       |   class    |   y   |   n   | _The main will render all the functionalities ._                 |
|   api-helper | funtional  |   n   |   n   | _This holds all api headers ._                                   |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Forms        |    H     |     3 hrs      |     0 hrs     |    TBD      |
| Create CRUD Actions |    H     |     6 hrs      |     0 hrs     |     TBD     |
| Add styling         |    H     |     24hrs      |     0 hrs     |     TBD     |
| TOTAL               |          |     34 hrs     |     0 hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model
https://imgur.com/wlzAP9K

https://imgur.com/e6Fikxq


####  Flowchart
https://imgur.com/VUry8CW

``` structure

database_db
|__ users/
|__ resources/
|__ posts/

```

#### Data Heirarchy



<br>

### Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _For frontend design._ |
|   React Router   | _For links and routing._ |
|     Axios        | _For api calls._ |
|     Rails        | _For backend design._ |
|     Cors         | _Header that help webapplications run in a browser._ |

<br> 

***



## Post-MVP



***

## Code Showcase



## Code Issues & Resolutions



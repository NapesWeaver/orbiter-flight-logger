'use strict';

import { DATA } from '../data/data.js';

const GUEST_NAVIGATION = `  
  <nav role="navigation">      
    <ul>
      <li id="nav-login"><a href="#">Log In</a></li>
      <li id="nav-gallery"><a href="#">Gallery</a></li>
      <li id="nav-signup"><a href="#">Sign Up</a></li>
    </ul>
  </nav>
  `;

const USER_NAVIGATION = `
  <nav role="navigation">      
    <ul>
      <li id="nav-home"><a href="#">Home</a></li>
      <li id="nav-search"><a href="#">Search</a></li>
      <li id="nav-gallery"><a href="#">Gallery</a></li>
      <li id="nav-profile"><a href="#">Profile</a></li>
      <li id="nav-logout"><a href="#">Log Out</a></li>
    </ul>
  </nav>
  `;

function decorateNavigation() {
  return DATA.loggedIn ? USER_NAVIGATION : GUEST_NAVIGATION;
}

function decorateLoginPage() {
  const userName = DATA.user.userName ? DATA.user.userName : '';
  return `
  ${decorateNavigation()}
  <main>
    <div id="page-login">
      <h2>User Log In</h2>
      <form action="#" class="form-login">
        <fieldset role="group">
          <label for="#user-name">User Name
            <input type="text" id="user-name" class="user-input" value="${userName}" required placeholder="username">
          </label>
          <label for="#password">Password
            <input type="password" id="password" class="user-input" value="passwordnapes" required placeholder="password">
          <input type="submit" id="btn-login" value="LOG IN">
        </fieldset>
      </form>
    </div>
  </main>
  `;
}

function decorateSignupPage() {
  return `
  ${decorateNavigation()}
  <main>
    <div id="page-signup">
      <h2>Create Account</h2>
      <form action="#" class="form-signup">
        <fieldset role="group">
          <label for="#first-name">First Name
            <input type="text" id="first-name" class="user-input" required placeholder="First Name">
          </label>
          <label for="#last-name">Last Name
            <input type="text" id="last-name" class="user-input" required placeholder="Last Name">
          </label>
          <label for="#email">Email
            <input type="email" id="email" class="user-input" required placeholder="you@email.com">
          </label>
          <label for="#user-name">User Name
            <input type="text" id="user-name" class="user-input" required placeholder="user name">
          </label>
          <label for="#password">Password
            <input type="password" id="password" class="user-input" required placeholder="password">
          </label>
          <label for="#retype-password">Retype Password
            <input type="password" id="retype-password" class="user-input" required placeholder="password">
          </label>
          <input type="submit" id="btn-signup" value="SIGN UP">
        </fieldset>
      </form>
    </div>
  </main>
  `;
}

function decorateProfilePage(data) {
  return `
  ${decorateNavigation()}
  <main>
    <div id="page-profile">
      <h2>Edit Profile</h2>
      <button id="btn-delete-profile">DELETE PROFILE</button>
      <form action="#" class="form-profile">
        <fieldset role="group">
          <label for="#first-name">First Name
            <input type="text" id="first-name" class="user-input" required value=${DATA.user.firstName}>
          </label>
          <label for="#last-name">Last Name
            <input type="text" id="last-name" class="user-input" required value=${DATA.user.lastName}>
          </label>
          <label for="#email">Email
            <input type="text" id="email" class="user-input" required value=${DATA.user.email}>
          </label>
          <label for="#user-name">User Name
            <input type="text" id="user-name" class="user-input" required value=${DATA.user.userName}>
          </label>
          <label for="#password">Password
            <input type="password" id="password" class="user-input" required value=${DATA.user.password} placeholder="password">
          </label>
          <label for="#retype-password">Retype Password
            <input type="password" id="retype-password" class="user-input" required placeholder="password">
          </label>
          <input type="submit" id="btn-profile" value="SUBMIT">
        </fieldset>        
      </form>
    </div>
  </main>
  `;
}

function decorateLogs(logs) {
  return logs.map((log, index) => {
    return `
    <div class="log" log-index="${index + 1}">
      <label for=".log-title">Title
        <input type="text" class="log-title user-input" required value="${log.title}">
      </label>
      <label for=".vessel">Vessel
        <input type="text" class="vessel user-input" required value="${log.vessel}">
      </label> 
      <label for=".date">Date
        <input type="text" class="date user-input" required value="${log.date}">
      </label>
      <textarea class="txt-log-entry" placeholder="Log entry...">${log.log}</textarea>
      <div class="buttons-log">
        <button class="btn-new-log">NEW LOG</button>
        <button class="btn-delete-log">DELETE LOG</button>
      </div>
    </div>
    `;
  }).join('');
}

function decorateMission(mission, index) {
  // console.log('index', index);
  // console.log('DATA.missionIndex', DATA.missionIndex);
  let version = mission.orbiterVersion ? mission.orbiterVersion : '--Choose Version--';
  let os = mission.os ? mission.os : '--Choose Version--';
  let title = mission.title ? mission.title : 'Captain\'s Log';
  let logs = [
    {
      title:'Launch',
      vessel: 'XR-1',
      date: 'April 21, 2012',
      log: 'Blast off!'
    },      
    {
      title: 'Docking',
      vessel: 'XR-1',
      date: 'April 22, 2012',
      log:'Docked to ISS'
    },      
    {
      title: 'Earth Escape',
      vessel: 'AR-18',
      date: 'April 23, 2012',
      log:'Onward to Mars'
    }
  ];
  return `
    <h3 class="mission-title">${title}</h3>
    <div class="result hidden" data-index="${index}">
      <form action="#" class="form-logger">
        <div class="mission">
          <fieldset role="group">            
            <label for=".select-version">Orbiter Version</label>
            <select class="select-version user-input">
              <option value="${version}">${version}</option>
              <option value="Orbiter 2016">Orbiter 2016</option>
              <option value="Orbiter 2010">Orbiter 2010</option>
              <option value="Orbiter 2006">Orbiter 2006</option>
              <option value="Orbiter 2005">Orbiter 2005</option>
            </select>
            <label for=".select-os">Operating System</label>
            <select class="select-os user-input">
              <option value="${os}">${os}</option>
              <option value="Windows 10">Windows 10</option>
              <option value="Windows 8.1">Windows 8.1</option>
              <option value="Windows 7">Windows 7</option>
              <option value="Windows Vista">Windows Vista</option>
              <option value="Windows XP">Windows XP</option>
              <option value="Windows 2000">Windows 2000</option>
              <option value="Other">Other</option>
            </select>
            <label for=".title">Flight
              <input type="text" class="title user-input" value="${title}">
            </label>   
            <div class="flight-logs">
              ${decorateLogs(logs)}
            </div>
            <div class="buttons-mission">
              <input type="submit" class="btn-mission" value="SAVE MISSION">
              <button class="btn-delete-mission">DELETE MISSION</button>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
    `;
}

function decorateMissions(missions) {
  return missions.map((mission, index) => {        
    return decorateMission(mission, index);
  }).join('');
}

function decorateHomePage(data) {
  // console.log(data);
  // console.log(DATA.missionIndex);  
  const BTN_NEW_MISSION = '<button id="btn-new-mission">NEW MISSION</button>';
  const MISSIONS = data.missions.length > 0 ? decorateMissions(data.missions) : '';
  return `
  ${decorateNavigation()}
  <main>
    <div id="page-home">
      <h2>${DATA.user.userName}</h2>      
      ${BTN_NEW_MISSION}
      <div class="results">     
        ${MISSIONS}
      </div>
    </div>
  </main>
  `;
}

function decorateSearchLogs(logs) {
  return logs.map((log, index) => {
    return `    
    <div class="search-log" log-index="${index + 1}">
      <p>Title: ${log.title}</p>
      <p>Vessel: ${log.vessel}</p>
      <p>Data: ${log.date}</p>
      <p>Log: ${log.log}</p>
    </div>
    `;
  }).join('');
}

function decorateSearchMissions(missions) {
  return missions.map((mission, index) => {
    let version = mission ? mission.orbiterVersion : '--Choose Version--';
    let os = mission ? mission.os : '--Choose Version--';
    let title = mission ? mission.title : 'Captain\'s Log';
    let logs = [
      {
        title:'Launch',
        vessel: 'XR-1',
        date: 'April 21, 2012',
        log: 'Blast off!'
      },      
      {
        title: 'Docking',
        vessel: 'XR-1',
        date: 'April 22, 2012',
        log:'Docked to ISS'
      },      
      {
        title: 'Earth Escape',
        vessel: 'AR-18',
        date: 'April 23, 2012',
        log:'Onward to Mars'
      }
    ];
    return `
    <h3 class="mission-title">${title}</h3>
    <div class="result hidden" data-index="${index + 1}">
      <div class="mission">        
        <p>${version}</p>
        <p>${os}</p>
        <p>${title}</p>
        <div class="flight-logs">
          ${decorateSearchLogs(logs)}
        </div>            
      </div>
    </div>
    `;
  }).join('');
}

function decorateSearchPage(data) {
  const SEARCH_RESULTS = data ? decorateSearchMissions(data.missions) : '';
  return `
  ${decorateNavigation()}
  <main>
    <div id="page-search">
      <h2>Search Flight Logs</h2>
      <form action="#" class="form-search">
        <fieldset role="group">
          <label for="select-version">Orbiter Version</label>
          <select id="select-version">
            <option value="">--Choose Version--</option>
            <option value="Orbiter 2016">Orbiter 2016</option>
            <option value="Orbiter 2010">Orbiter 2010</option>
            <option value="Orbiter 2006">Orbiter 2006</option>
            <option value="Orbiter 2005">Orbiter 2005</option>
          </select>
          <label for="select-os">Operating System</label>
          <select id="select-os">
            <option value="">--Choose Version--</option>
            <option value="Windows 10">Windows 10</option>
            <option value="Windows 8.1">Windows 8.1</option>
            <option value="Windows 7">Windows 7</option>
            <option value="Windows Vista">Windows Vista</option>
            <option value="Windows XP">Windows XP</option>
            <option value="Windows 2000">Windows 2000</option>
            <option value="other">Other</option>
          </select>
          <label for="#search-text">Vessel
            <input type="text" id="search-text" placeholder="Apollo 18">
          </label>
          <input type="submit" id="btn-search" value="SEARCH">
        </fieldset>
      </form>
      <div class="results">
        ${SEARCH_RESULTS}
      </div>
    </div>
  </main>
  `;
}

function decorateGalleryPage() {
  return `
  ${decorateNavigation()}
  <main>
    <div id="page-gallery">
      <h2>Gallery</h2>
      <img src="./images/challenger.jpg" alt="Challenger Shuttle">
    </div>
  </main>
  `;
}

export { decorateMission, decorateLoginPage, decorateHomePage, decorateSearchPage, decorateGalleryPage, decorateSignupPage, decorateProfilePage };
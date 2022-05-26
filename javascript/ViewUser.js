let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';document.getElementById('i8kx1v').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i8kx1v")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateUser/' + transitionId;}};document.getElementById('igmkh').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("igmkh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewNFT/' + transitionId;}};document.getElementById('imc97').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("imc97")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewNFT/' + transitionId;}};document.getElementById('i555j').onclick = (event) => {
    event.preventDefault();
    { 
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document
            .getElementById(key)
            .contains(document.getElementById("i555j")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/viewNFT/' + transitionId;}};window.onload = () => {let userId = window.location.pathname.replace('/ViewUser/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
      if(response.body.query.userProfile !== undefined){
        if(document.querySelector('[annotationname = userProfile]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = userProfile]').setAttribute('data-image-base64',response.body.query.userProfile.data);
          let fileName = response.body.query.userProfile.name;
          let file = new File([response.body.query.userProfile.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = userProfile]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = userProfile]').src = response.body.query.userProfile.data ;
        }
        document.querySelector('[annotationname = userProfile]').name = response.body.query.userProfile.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = Username]').textContent = response.body.query.Username; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = BioUser]').textContent = response.body.query.BioUser; } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};
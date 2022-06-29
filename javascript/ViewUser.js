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
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = Username]').textContent = response.body.query.Username; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = BioUser]').textContent = response.body.query.BioUser; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = NFTOwner]').setAttribute('selected-element',response.body.query.NFTOwner.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'NFTOwner']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userProfile']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.src = response.body.query.NFTOwner.userProfile;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'Username']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.NFTOwner.Username;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'BioUser']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.NFTOwner.BioUser;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'UserNFTs']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.NFTOwner.UserNFTs;}} catch (e) {console.log(e);};
        }
      if(response.body.query.NFTOwner._id){
        map.set(
          document.querySelector(
            "[annotationname = 'NFTOwner']"
          ).getAttribute("id"),
          response.body.query.NFTOwner
        );
      }
     } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = UserNFTs]').setAttribute('selected-element',response.body.query.UserNFTs.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'UserNFTs']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.UserNFTs;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'NFTimage']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.src = tableData[tableData.length - index -1].NFTimage;
      }
    }
    catch(e) {console.log(e);}; try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'NFTtitle']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].NFTtitle;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.UserNFTs._id){
        map.set(
          document.querySelector(
            "[annotationname = 'UserNFTs']"
          ).getAttribute("id"),
          response.body.query.UserNFTs
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};
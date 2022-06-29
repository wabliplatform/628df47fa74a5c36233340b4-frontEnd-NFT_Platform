let apiUserApi = new TempApi.UserApi();import TempApi from '../src/index';let apiNftApi = new TempApi.NftApi();
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
let arrayiuo8h = [];
document.getElementById("ijcdq").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("iw961")
  arrayiuo8h.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULi9k69();
};

function refreshULi9k69() {
let e=``;
for (let y=0; y<arrayiuo8h.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayiuo8h[y].value}'><p style="display: inline-block">${arrayiuo8h[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("i9k69").innerHTML = e;
}

document.getElementById("i9k69").addEventListener("click", event => {
  event.preventDefault();
  arrayiuo8h = arrayiuo8h.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULi9k69();
});
function initializearrayiuo8h(data) {
  arrayiuo8h = data.map(item => ({
    value: item._id,
    liValue: item['NFTtitle']
  }));
}
document.addEventListener('alignUserNFTs', function(e) {
  const advanceSelect = document.getElementById('iw961');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('iq62l').onclick = (event) => {
    event.preventDefault();
    let userId = window.location.pathname.replace('/UpdateUser/','');let user = new TempApi.User();user['Username'] = document.querySelector("[annotationname = 'Username']").value;user['userProfile'] = {
        data: document.querySelector("[annotationname = 'userProfile']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'userProfile']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'userProfile']").src,
        name: document.querySelector("[annotationname = 'userProfile']").getAttribute("name")
      };user['BioUser'] = document.querySelector("[annotationname = 'BioUser']").value;user['UserNFTs'] = arrayiuo8h.map(item => item.value); let opts = {user};apiUserApi.updateuser( userId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = Username]').value = response.body.query.Username ;
      if(response.body.query.userProfile !== undefined){

        if(document.querySelector('[annotationname = userProfile]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = userProfile]').setAttribute('data-image-base64',response.body.query.userProfile.data);
        }
        else{
          document.querySelector('[annotationname = userProfile]').src = response.body.query.userProfile.data;
        }
        document.querySelector('[annotationname = userProfile]').name = response.body.query.userProfile.name;
      }
      document.querySelector('[annotationname = BioUser]').value = response.body.query.BioUser ;initializearrayiuo8h(response.body.query.UserNFTs|| []) ; {  location.href= '/HOMEPAGE/'+response.body.query._id+'' ;}}});};window.onload = () => {let userId = window.location.pathname.replace('/UpdateUser/','');apiUserApi.getuser( userId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = Username]').value = response.body.query.Username; } catch (e) { console.log(e) };try { 
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
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = BioUser]').value = response.body.query.BioUser; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = NFTOwner]').setAttribute('selected-element',response.body.query.NFTOwner.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'NFTOwner']");
        if (insideSubdocument !==null) {
           try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'Username']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.value = response.body.query.NFTOwner.Username;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'userProfile']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.value = response.body.query.NFTOwner.userProfile;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'BioUser']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.value = response.body.query.NFTOwner.BioUser;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'UserNFTs']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.textContent = response.body.query.NFTOwner.UserNFTs;}} catch (e) {console.log(e);}; try {const attributeSubdocumentElement = insideSubdocument.querySelector("[annotationname = 'UserNFTs']"); if (attributeSubdocumentElement !== null) { attributeSubdocumentElement.value = response.body.query.NFTOwner.UserNFTs;}} catch (e) {console.log(e);};
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
        document.querySelector('[annotationname = UserNFTs]').setAttribute('selected-element',response.body.query.UserNFTs.NFTtitle);document.dispatchEvent(new Event("alignUserNFTs"));
        const insideSubdocument = document.querySelector("[annotationname = 'UserNFTs']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.UserNFTs;
    initializearrayiuo8h(tableData); 
 refreshULi9k69();
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
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
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiNftApi.getAllnft((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iz4l6").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'NFTtitle']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].NFTtitle;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'NFTtitle'){
        subDataElements[i].textContent = data[data.length -i -1].NFTtitle;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignUserNFTs"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
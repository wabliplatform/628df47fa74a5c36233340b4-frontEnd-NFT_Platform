let apiNftApi = new TempApi.NftApi();import TempApi from '../src/index';let apiUserApi = new TempApi.UserApi();let user = new TempApi.User();
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
let arrayi956f = [];
document.getElementById("i811h").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i69l1")
  arrayi956f.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULiayt6();
};

function refreshULiayt6() {
let e=``;
for (let y=0; y<arrayi956f.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayi956f[y].value}'><p style="display: inline-block">${arrayi956f[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("iayt6").innerHTML = e;
}

document.getElementById("iayt6").addEventListener("click", event => {
  event.preventDefault();
  arrayi956f = arrayi956f.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULiayt6();
});
function initializearrayi956f(data) {
  arrayi956f = data.map(item => ({
    value: item._id,
    liValue: item['NFTtitle']
  }));
}
document.addEventListener('alignUserNFTs', function(e) {
  const advanceSelect = document.getElementById('i69l1');
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
    user['Username'] = document.querySelector("[annotationname = 'Username']").value;user['userProfile'] = {
        data: document.querySelector("[annotationname = 'userProfile']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'userProfile']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'userProfile']").src,
        name: document.querySelector("[annotationname = 'userProfile']").getAttribute("name")
      };
      user['BioUser'] = document.querySelector("[annotationname = 'BioUser']").value;apiUserApi.createuser( user, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/HOMEPAGE/'+response.body.query._id+'' ;}}});};window.onload = () => {apiNftApi.getAllnft((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ifz6j").querySelectorAll( "[dataitem='true']" )].filter(
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
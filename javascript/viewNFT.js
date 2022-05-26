let apiNftApi = new TempApi.NftApi();import TempApi from '../src/index';document.getElementById('imk1i').onclick = (event) => {
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
            .contains(document.getElementById("imk1i")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/UpdateNFT/' + transitionId;}};window.onload = () => {let nftId = window.location.pathname.replace('/viewNFT/','');apiNftApi.getnft( nftId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
      if(response.body.query.NFTimage !== undefined){
        if(document.querySelector('[annotationname = NFTimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = NFTimage]').setAttribute('data-image-base64',response.body.query.NFTimage.data);
          let fileName = response.body.query.NFTimage.name;
          let file = new File([response.body.query.NFTimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = NFTimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = NFTimage]').src = response.body.query.NFTimage.data ;
        }
        document.querySelector('[annotationname = NFTimage]').name = response.body.query.NFTimage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = NFTdescription]').textContent = response.body.query.NFTdescription; } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};
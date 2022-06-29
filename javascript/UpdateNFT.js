let apiNftApi = new TempApi.NftApi();import TempApi from '../src/index';let apiCategorynftApi = new TempApi.CategorynftApi();document.addEventListener('alignNFTCategory', function(e) {
  const advanceSelect = document.getElementById('i8cxo');
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
    let nftId = window.location.pathname.replace('/UpdateNFT/','');let nft = new TempApi.Nft();nft['NFTprice'] = document.querySelector("[annotationname = 'NFTprice']").value;nft['NFTdescription'] = document.querySelector("[annotationname = 'NFTdescription']").value;nft['titleNFT'] = document.querySelector("[annotationname = 'titleNFT']").value;nft['NFTCategory'] = document.querySelector("[annotationname = 'NFTCategory']").value; let opts = {nft};apiNftApi.updatenft( nftId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = NFTprice]').value = response.body.query.NFTprice ;document.querySelector('[annotationname = NFTdescription]').value = response.body.query.NFTdescription ;document.querySelector('[annotationname = titleNFT]').value = response.body.query.titleNFT ;document.querySelector('[annotationname = NFTCategory]').value = response.body.query.NFTCategory ;{  location.href= '/HOMEPAGE/'+response.body.query._id+'' ;}}});};window.onload = () => {let nftId = window.location.pathname.replace('/UpdateNFT/','');apiNftApi.getnft( nftId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = titleNFT]').value = response.body.query.titleNFT; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = NFTprice]').value = response.body.query.NFTprice; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = NFTdescription]').value = response.body.query.NFTdescription; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = NFTCategory]').setAttribute('selected-element',response.body.query.NFTCategory.titleCategoryNFT);document.dispatchEvent(new Event("alignNFTCategory"));
        const insideSubdocument = document.querySelector("[annotationname = 'NFTCategory']");
        if (insideSubdocument !==null) {
          
        }
      if(response.body.query.NFTCategory._id){
        map.set(
          document.querySelector(
            "[annotationname = 'NFTCategory']"
          ).getAttribute("id"),
          response.body.query.NFTCategory
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiCategorynftApi.getAllcategorynft((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ixfsk").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignNFTCategory"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
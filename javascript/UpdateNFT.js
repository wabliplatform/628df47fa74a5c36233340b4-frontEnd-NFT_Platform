document.addEventListener('alignNFTCategory', function(e) {
  const advanceSelect = document.getElementById('i8cxo');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});window.onload = () => {};
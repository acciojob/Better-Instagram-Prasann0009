//your code here
const images = document.querySelectorAll(".image");

for(let i=0;i<images.length;i++)
{
   images[i].addEventListener("dragstart",onDragStart);
   images[i].addEventListener("dragover",onDragOver);
   images[i].addEventListener("drop",onDrop);
}
  let dragImage;
  let dragOverImage;


function onDragStart(event)
{
  dragImage = event.target;
}
function onDragOver(event)
{
  dragOverImage = event.target;
  event.preventDefault();
}
function onDrop(event)
{
  const dropImage = event.target;
  const ImageDrag = window.getComputedStyle(dragImage).backgroundImage;
  const ImageDragId = dragImage.id;
  const ImageDragText = dragImage.innerText;
   
  const dropImageId = dropImage.id;
  const dropImageText= dropImage.innerText;
  const dropImageName = window.getComputedStyle(dropImage).backgroundImage;

  dropImage.setAttribute("id",ImageDragId);
  dropImage.innerText = ImageDragText;
dropImage.style.backgroundImage = ImageDrag;

dragImage.setAttribute("id",dropImageId);
  dragImage.innerText = dropImageText;
dragImage.style.backgroundImage = dropImageName;

}
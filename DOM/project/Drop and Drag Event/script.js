const draggableItems=Object.values(
    document.getElementsByClassName('draggables')
);

const container=Object.values(document.getElementsByClassName('containers'));

container.forEach((container)=>{
    container.addEventListener('dragover', (e)=>{
        e.preventDefault();
        // console.log(e);
        const draggedItem=document.querySelector('.dragging');
        container.appendChild(draggedItem);
    });
})
draggableItems.forEach((item)=>{
    item.addEventListener('dragstart', ()=>{
        item.classList.add('dragging');
        console.log('dragStarts');
    });
    item.addEventListener('dragend', ()=>{
        item.classList.remove('dragging');
        console.log('dragEnd');
    });
});
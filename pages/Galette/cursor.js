const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', function (event)
{
    cursor.style.left = `${event.clientX - 10}px`;
    cursor.style.top = `${event.clientY - 10}px`;
})
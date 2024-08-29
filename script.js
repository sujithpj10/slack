function clickHandler()
{
    var a = document.getElementsByClassName('dropdown')[0];

    if(a.style.display == 'flex')
    {
        a.style.display = 'none';
    }
    else
    {
        a.style.display = 'flex';
    }
    
}
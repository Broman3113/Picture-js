const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = "none";
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = "block";
                mark.classList.add('animated', 'fadeIn');

            });
        }
    };

    menu.addEventListener('click', (e) => {
        if (e.target && e.target.tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            typeFilter(wrapper.querySelectorAll("."+e.target.className.split(' ')[0]));
            if (!wrapper.offsetHeight) {
                no.style.display = "block";
                no.classList.add('animated', 'fadeIn');
            }
        }
    });

};

export default filter;

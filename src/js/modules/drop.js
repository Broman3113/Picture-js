const drop = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item) {
        item.closest('.file_upload').style.boxShadow = "0px 0px 38px -14px rgba(34, 60, 80, 0.41) inset";
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.boxShadow = "none";
    }

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false);
        });
    });

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) =>{
            input.files = e.dataTransfer.files;
            let dots;
            const t = input.files[0].name.split('.');

            t[0].length > 6 ? dots = "..." : dots = ".";
            const name = t[0].substring(0, 6) + dots + t[1];
            input.previousElementSibling.textContent = name;
        })
    })}

export default drop;

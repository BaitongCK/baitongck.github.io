const portfolios = [
    {
        cid: 1, 
        company: 'Piesoft', 
        color: '#acc8b2', 
        projects: [
            {
                pid: 1, 
                img: 'assets/img/piesoft-account/pa.png', 
                alt: 'piesoft-account', 
                modal: '#accountModal'
            }, 
            {
                pid: 2, 
                img: 'assets/img/internal-audit/ia.png', 
                alt: 'internal-audit', 
                modal: '#auditModal'
            }, 
            {
                pid: 3, 
                img: 'assets/img/linkage/linkage.png', 
                alt: 'linkage', 
                modal: '#linkageModal'
            }, 
            {
                pid: 4, 
                img: 'assets/img/error/image-empty.png', 
                alt: 'covid19', 
                modal: '#covid19Modal'
            }, 
            {
                pid: 5, 
                img: 'assets/img/soc/soc.png', 
                alt: 'soc', 
                modal: '#socModal'
            }, 
            {
                pid: 6, 
                img: 'assets/img/pwa-gis/pwagis.png', 
                alt: 'pwa-gis', 
                modal: '#pwagisModal'
            }, 
            {
                pid: 7, 
                img: 'assets/img/pwa-quality/pwaquality.png', 
                alt: 'pwa-quality', 
                modal: '#pwaqualityModal'
            }, 
            {
                pid: 8, 
                img: 'assets/img/ebudget/ebudget.png', 
                alt: 'ebudget', 
                modal: '#ebudgetModal'
            }, 
            {
                pid: 9, 
                img: 'assets/img/nsf/nsf.png', 
                alt: 'nsf', 
                modal: '#nsfModal'
            }, 
            {
                pid: 10, 
                img: 'assets/img/doa-hr/doa-hr.png', 
                alt: 'doa-hr', 
                modal: '#doahrModal'
            }, 
            {
                pid: 11, 
                img: 'assets/img/pangchang/pangchang.png', 
                alt: 'pangchang', 
                modal: '#pangchangModal'
            }, 
            {
                pid: 12, 
                img: 'assets/img/alro/alro.png', 
                alt: 'alro', 
                modal: '#alroModal'
            }, 
        ] 
    }, 
    {
        cid: 2, 
        company: 'UOB Kay Kian', 
        color: '#fd4287', 
        projects: [] 
    }, 
    {
        cid: 3, 
        company: 'Dentsu Soken Thailand', 
        color: '#ef99b4', 
        projects: [] 
    }, 
    // {
    //     id: 13, 
    //     img: 'assets/img/alro/alro.png', 
    //     alt: 'alro', 
    //     modal: '#alroModal'
    // }, 
];

$(document).ready(function ()
{
    const parentElement = document.querySelector("#portfolios");

    // ใช้ forEach เพื่อวนลูปข้อมูลและสร้าง element
    portfolios.reverse().forEach(data => {
        if (data.projects.length > 0)
        {
            const divCompany = document.createElement("div");
            divCompany.className = "row folio-title";
            divCompany.style.setProperty("--accent-color", data.color);
            
            const companyH = document.createElement('h3');
            companyH.textContent = data.company;
            divCompany.appendChild(companyH);

            parentElement.appendChild(divCompany);

            const divProject = document.createElement("div")
            divProject.className = "row";

            data.projects.reverse().forEach(project => {
                const divCol = document.createElement("div");
                divCol.className = "col-md-6 col-lg-4 mb-5 folio-item";
        
                const divItem = document.createElement("div");
                divItem.className = "item-wrap";
        
                const img = document.createElement("img");
                img.src = project.img;
                img.alt = project.alt;
        
                const a = document.createElement("a");
                //a.href = project.modal;
                a.href = "#modal";
                a.className = "overlay openModal";
                a.dataset.bsToggle = "modal";
                //a.dataset.bsTarget = project.modal;
                a.dataset.bsTarget = "#modal";
                a.dataset.projectid = project.pid;
        
                divItem.appendChild(img);
                divItem.appendChild(a);
        
                divCol.appendChild(divItem);
        
                divProject.appendChild(divCol);
            });

            parentElement.appendChild(divProject);
        }
    });
});
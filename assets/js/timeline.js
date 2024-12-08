const jobs = [
    {
        id: 1, 
        color: '#54bdb8', 
        date: 'June 2013 - May 2016', 
        position: 'Computer Engineering', 
        company: 'Kasetsart University Sriracha Campus', 
        site: '', 
        location: 'Bangkok, Thailand' 
    },
    {
        id: 2, 
        color: '#acc8b2', 
        date: 'Jan 2018 - Jan 2024', 
        position: 'Web Developer', 
        company: 'Piesoft Co., Ltd.', 
        site: '', 
        location: 'Bangkok, Thailand' 
    }, 
    {
        id: 3, 
        color: '#e7dbab', 
        date: 'Jan 2020 - Jun 2020', 
        position: 'Web Developer', 
        company: 'Piesoft Co., Ltd.', 
        site: 'CDG Group Co., Ltd.', 
        location: 'Bangkok, Thailand' 
    }, 
    {
        id: 4, 
        color: '#faaaa7', 
        date: 'Feb 2024 - Aug 2024', 
        position: 'Freelance', 
        company: 'Piesoft Co., Ltd.', 
        site: '', 
        location: 'Bangkok, Thailand' 
    }, 
    {
        id: 5, 
        color: '#fd4287', 
        date: 'Sept 2024 - Nov 2024', 
        position: 'Programmer', 
        company: 'Advanced Systems Consulting Co., Ltd.', 
        site: 'UOB Kay Hian Securities (Thailand) Public Co., Ltd.', 
        location: 'Bangkok, Thailand' 
    }, 
    {
        id: 6, 
        color: '#ef99b4', 
        date: 'Dec 2024 - Present', 
        position: 'Back End Developer', 
        company: 'Adecco Phaholyothin Limited', 
        site: 'Dentsu Soken Thailand Limited', 
        location: 'Bangkok, Thailand' 
    }, 
    // {
    //     id: 7, 
    //     color: '#7aaceb', 
    //     date: '', 
    //     position: '', 
    //     company: '', 
    //     site: '', 
    //     location: '' 
    // }, 
    // {
    //     id: 8, 
    //     color: '#6d608c', 
    //     date: '', 
    //     position: '', 
    //     company: '', 
    //     site: '', 
    //     location: '' 
    // }, 
    // {
    //     id: 9, 
    //     color: '#ac88ab', 
    //     date: '', 
    //     position: '', 
    //     company: '', 
    //     site: '', 
    //     location: '' 
    // }, 
    // {
    //     id: 10, 
    //     color: '#d790b0', 
    //     date: '', 
    //     position: '', 
    //     company: '', 
    //     site: '', 
    //     location: '' 
    // }, 

    // #fe9f99 #fdd790 #d37a98 #e597a5 #f0b8a7 #fd8c94 #fea9a4 
    // #fed1b2 #c3e090 #88e8dc #6fd6fc #f66fa5 #fe9870 #fed674
];

$(document).ready(function ()
{
    const parentElement = document.querySelector("#ul-timeline");

    // ใช้ forEach เพื่อวนลูปข้อมูลและสร้าง element
    jobs.reverse().forEach(data => {
        // สร้าง <li>
        const listItem = document.createElement("li");
        listItem.style.setProperty("--accent-color", data.color);

        // สร้าง <div class="date">
        const dateDiv = document.createElement("div");
        dateDiv.className = "date";
        dateDiv.textContent = data.date;

        // สร้าง <div class="title">
        const titleDiv = document.createElement("div");
        titleDiv.className = "title";
        const titleH5 = document.createElement("h5");
        titleH5.textContent = data.position;
        titleDiv.appendChild(titleH5);

        // สร้าง <div class="descr">
        const descrDiv = document.createElement("div");
        descrDiv.className = "descr";

        // สร้าง <ul>
        const ulElement = document.createElement("ul");
        ulElement.style.setProperty("--bullets-color", data.color);

        // เพิ่ม <li> ภายใน <ul>
        const liCompany = document.createElement("li");
        const companyP = document.createElement("p");
        companyP.textContent = data.company;
        liCompany.appendChild(companyP);
        // เพิ่ม <li> ทั้งหมดลงใน <ul>
        ulElement.appendChild(liCompany);

        if(data.site !== '')
        {
            const liOnSite = document.createElement("li");
            const onSiteP = document.createElement("p");
            onSiteP.innerHTML = 'on site <br>' + data.site; // ใช้ innerHTML สำหรับ HTML ที่มี <br>
            liOnSite.appendChild(onSiteP);
            // เพิ่ม <li> ทั้งหมดลงใน <ul>
            ulElement.appendChild(liOnSite);
        }

        const liLocation = document.createElement("li");
        const locationP = document.createElement("p");
        locationP.textContent = data.location;
        liLocation.appendChild(locationP);
        // เพิ่ม <li> ทั้งหมดลงใน <ul>
        ulElement.appendChild(liLocation);

        // เพิ่ม <ul> ลงใน <div class="descr">
        descrDiv.appendChild(ulElement);

        // ประกอบ <li>
        listItem.appendChild(dateDiv);
        listItem.appendChild(titleDiv);
        listItem.appendChild(descrDiv);

        // เพิ่ม <li> ลงใน parent element
        parentElement.appendChild(listItem);
    });
});
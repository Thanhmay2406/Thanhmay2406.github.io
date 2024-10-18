//light mode & dark mode
document.getElementById("mode").addEventListener("click" , function() {
    const body = document.body;
    const img = this.querySelector("img");

    const avatar = document.getElementById("avatar")

    const github = document.getElementById("github")
    const threads = document.getElementById("threads")
    const linkedin = document.getElementById("linkedin")
    const zalo = document.getElementById("zalo")

    const github_img = github.querySelector("img")
    const threads_img = threads.querySelector("img")
    const linkedin_img = linkedin.querySelector("img")
    const zalo_img = zalo.querySelector("img")

    if(body.classList.contains("bg-[#F0E7DB]"))// neu nhu dang o che do sang
    {
        //cap nhat tong the
        body.classList.remove("bg-[#F0E7DB]", "text-black");
        body.classList.add("bg-[#313134]", "text-white");
        img.src = "img/dark_mode_30dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
        img.alt = "dark mode";
        //cap nhat avatar
        avatar.classList.remove("border-black")
        avatar.classList.add("border-white")
        //cap nhat cac icon
        github_img.src ="img/github-darkmode.svg"
        threads_img.src = "img/threads-darkmode.svg"
        linkedin_img.src = "img/linkedin-darkmode.svg"
        zalo_img.src = "img/zalo-darkmode.svg"
    }
    else
    {
        // cap nhat tong the
        body.classList.remove("bg-[#313134]" ,"text-white");
        body.classList.add("bg-[#F0E7DB]", "text-black");
        img.src = "img/light_mode_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
        img.alt = "light mode";
        //cap nhat avatar
        avatar.classList.remove("border-white")
        avatar.classList.add("border-black")
        github_img.src ="img/github-lightmode.svg"
        threads_img.src = "img/threads-lightmode.svg"
        linkedin_img.src = "img/linkedin-lightmode.svg"
        zalo_img.src = "img/zalo-lightmode.svg"
    }
})


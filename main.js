//light mode & dark mode
document.getElementById("mode").addEventListener("click" , function() {
    const body = document.body;
    const img = this.querySelector("img");

    if(body.classList.contains("bg-[#F0E7DB]"))
    {
        body.classList.remove("bg-[#F0E7DB]", "text-black");
        body.classList.add("bg-[#313134]", "text-white");
        img.src = "img/dark_mode_30dp_FFF_FILL0_wght400_GRAD0_opsz24.svg";
        img.alt = "dark mode";
    }
    else
    {
        body.classList.remove("bg-[#313134]" ,"text-white");
        body.classList.add("bg-[#F0E7DB]", "text-black");
        img.src = "img/light_mode_30dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
        img.alt = "light mode";
    }
})


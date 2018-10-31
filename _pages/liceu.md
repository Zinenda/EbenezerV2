---
title: Liceu Ebenezer
description: Ensino Primário, Secundário & Pré-Universitário
image: /assets/img/liceu3dcover.jpg
logo: /assets/img/liceu_logo.svg
layout: page
ref: Liceu Ebenezer
---

<script>
    $('a').click(function(e){
    e.preventDefault();
    var link = $(this).attr('href');

    swal({
        title: "Are you sure?",
        text: "By clicking 'OK' you will be redirected to the link.",
        type: "warning",
        showCancelButton: true
    },
    function(){
        window.location.href = "/imepe/";
    });
});
</script>

{% include liceu/sobre-liceu.html %}

{% include liceu/servicos-liceu.html %}

{% include liceu/mensalidade-liceu.html %}
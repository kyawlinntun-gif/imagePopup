$("#imageGallery").imagePopup({
    overlay: "rgba(0,100,0,0.5)",
    closeButton: {
        src: "images/close.png",
        width: "30px",
        height: "30px"
    },
    imageBorder: "15px solid #fff",
    borderRadius: "10px",
    imageWidth: "500px",
    imageHeight: "400px",
    imageCaption: {
        exist: true,
        color: "#fff",
        fontSize: "40px"
    },
    open: function() {
        console.log("Opened");
    },
    close: function() {
        console.log("Closed");
    }
});

$("#imageGallery2").imagePopup();

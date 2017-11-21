En el archivo game.css
Se cambio el color del fondo de amarillo a gris:
.game-holder {
	position: absolute;
	width: 100%;	
	height: 100%;
	background: -webkit-linear-gradient(#e4e0ba, #f7d9aa);
	background: linear-gradient(#6E6E6E, #585858);
}

En el archivo game.js
En la paleta de colores se agregaron los colores:
redE, grey, ySun.
Y se cambió el color azul.
var Colors = {
    red:0xf25346,
    redE: 0xFF0000,
    white:0xd8d0d1,
    brown:0x59332e,
    brownDark:0x23190f,
    pink:0xF5986E,
    yellow:0xf4ce93,
    //blue:0x68c3c0,
    blue: 0x013ADF,
    grey: 0x585858,
    ySun: 0x848484,
};

Se agrego un objeto para dar el efecto de una luna en el cielo
Sun = function(){
	
	// create the geometry (shape) of the cylinder;
	// the parameters are: 
	// radius top, radius bottom, height, number of segments on the radius, number of segments vertically
	var geom = new THREE.CylinderGeometry(1,200,60,200,200);
	
	// rotate the geometry on the x axis
	geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
	
	// create the material 
	var mat = new THREE.MeshPhongMaterial({
		color:Colors.ySun,
	});

	// To create an object in Three.js, we have to create a mesh 
	// which is a combination of a geometry and some material
	this.mesh = new THREE.Mesh(geom, mat);
}

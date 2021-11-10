coupons = [
    {name: 'Primer Cupon',
    discount: 15,
    },
    {name:'Segundo Coupon',
     discount: 10,
    },
];

function calculaValorNuevo(p,d){
  var nuevoPrecio = (p* (100 - d))/100;
  return(nuevoPrecio);
}

function calculaPrecioConDescuento()
{
    var precioProd    = document.getElementById("precioProducto");
    var precio        = precioProd.value;
    var descuentoProd = document.getElementById("descuentoProducto");
    const descuentoText = descuentoProd.value;
    const isCouponValueValid = function (coupon) {
        return coupon.name === descuentoText;
    };
    const userCoupon  = coupons.find(isCouponValueValid);
    if (!userCoupon) {
        alert("El cupon "+descuentoText+ " No es valido");
    }
    else {

        var descuento = userCoupon.discount;
        var resultado     = calculaValorNuevo(precio,descuento); 
        var muestraResul  = document.getElementById("presentaResultado");
        muestraResul.innerText = "El valor a Pagar es : "+ resultado; 
    }
     
}
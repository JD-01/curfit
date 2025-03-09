// =============================================================
// =============================================================

document.addEventListener ( 'DOMContentLoaded', ( ) =>
{
  // ===========================================================
  try
  {
    //
    let cf_vBotonMenu1 = document.getElementById ( 'cf_button-menu-1' );
        cf_vBotonMenu1.vFondo  = document.getElementById ( 'cf_button-menu-1_fondo' );
        cf_vBotonMenu1.vBarras = document.getElementById ( 'cf_button-menu-1_barras' );
        cf_vBotonMenu1.vEquis  = document.getElementById ( 'cf_button-menu-1_equis' );
    //
    let cf_vMenu1 = document.getElementById ( 'cf_menu-1' );
        cf_vMenu1.vVisible = false;
    //
    let cf_vBotonMenu2 = document.getElementById ( 'cf_button-menu-2' );
    //
    let cf_vMenu2 = document.getElementById ( 'cf_menu-2' );
        cf_vMenu2.vVisible = false;
    //
    cf_vBotonMenu1.addEventListener ( 'click', ( ) =>
    {
      if ( ! cf_vMenu1.vVisible ) {
        cf_vMenu1.vVisible = true;
        cf_vBotonMenu1.vFondo.className  = 'cf_header_d-1_hr-1 cf_header_d-1_hr-1_e-2';
        cf_vBotonMenu1.vBarras.className = 'cf_header_d-1_button-1_d-1 cf_header_d-1_button-1_d-1_e-2';
        cf_vBotonMenu1.vEquis.className  = 'cf_header_d-1_button-1_d-2 cf_header_d-1_button-1_d-2_e-2';
        //
        cf_vMenu1.className  = 'cf_header_d-1_d-1 cf_header_d-1_d-1_e-2';
      }
      else {
        cf_vMenu1.vVisible = false;
        cf_vBotonMenu1.vFondo.className = 'cf_header_d-1_hr-1 cf_header_d-1_hr-1_e-1';
        cf_vBotonMenu1.vBarras.className = 'cf_header_d-1_button-1_d-1 cf_header_d-1_button-1_d-1_e-1';
        cf_vBotonMenu1.vEquis.className  = 'cf_header_d-1_button-1_d-2 cf_header_d-1_button-1_d-2_e-1';
        //
        cf_vMenu1.className  = 'cf_header_d-1_d-1 cf_header_d-1_d-1_e-1';
      }
    });

    //
    cf_vBotonMenu2.addEventListener ( 'click', ( ) =>
    {
      if ( ! cf_vMenu2.vVisible ) {
        cf_vMenu2.vVisible = true;
        cf_vBotonMenu2.className  = 'cf_header_d-1_nav-1_d-1_button-1 cf_header_d-1_nav-1_d-1_button-1_e-1';
        //
        cf_vMenu2.className  = 'cf_header_d-1_nav-1_d-1_d-2 cf_header_d-1_nav-1_d-1_d-2_e-2';
      }
      else {
        cf_vMenu2.vVisible = false;
        cf_vBotonMenu2.className  = 'cf_header_d-1_nav-1_d-1_button-1 cf_header_d-1_nav-1_d-1_button-1_e-2';
        //
        cf_vMenu2.className  = 'cf_header_d-1_nav-1_d-1_d-2 cf_header_d-1_nav-1_d-1_d-2_e-1';
      }
    });
  } 
  catch ( vError )
  {
    console.error ( vError );
  }
});
export const newMessageTemplate = (userMessage) => {
  const { email, username, message } = userMessage;
  return `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          .image_block img+div {
              display: none;
          }
  
          @media (max-width:520px) {
              .desktop_hide table.icons-inner {
                  display: inline-block !important;
              }
  
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .row-content {
                  width: 100% !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
  <tbody>
  <tr>
  <td class="column column-1" style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;text-align:center;">
  <h1 style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">- CHAT AI -</span></h1>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="15" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad">
  <div align="center" class="alignment" style="line-height:10px"><img src="https://chat-gpt-api-xoio.onrender.com/avatar/logo.png" style="display: block; height: auto; border: 0; width: 70px; max-width: 100%;" width="70"/></div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="color:#000000;font-size:20px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-weight:400;line-height:120%;text-align:center;direction:ltr;letter-spacing:0px;mso-line-height-alt:24px;">
  <p style="margin: 0;">¡Nuevo mensaje!</p>
  </div>
  </td>
  </tr>
  </table><!--[if mso]><style>#list-r0c0m3 ul{margin: 0 !important; padding: 0 !important;} #list-r0c0m3 ul li{mso-special-format: bullet;}#list-r0c0m3 .levelOne li {margin-top: 0 !important;} #list-r0c0m3 .levelOne {margin-left: -20px !important;}#list-r0c0m3 .levelTwo li {margin-top: 0 !important;} #list-r0c0m3 .levelTwo {margin-left: 20px !important;}#list-r0c0m3 .levelThree li {margin-top: 0 !important;} #list-r0c0m3 .levelThree {margin-left: 60px !important;}#list-r0c0m3 .levelFour li {margin-top: 0 !important;} #list-r0c0m3 .levelFour {margin-left: 100px !important;}#list-r0c0m3 .levelFive li {margin-top: 0 !important;} #list-r0c0m3 .levelFive {margin-left: 140px !important;}</style><![endif]-->
  <table border="0" cellpadding="10" cellspacing="0" class="list_block block-4" id="list-r0c0m3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div class="levelOne" style="margin-left: 0;">
  <ul class="leftList" style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; font-weight: 400; text-align: left; color: #145661; font-size: 16px; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; line-height: 120%; direction: ltr; letter-spacing: 0; list-style-type: disc;">
  <li style="margin-bottom: 0; text-align: left;"><strong>Email:</strong> <span style="color: #000000;">${email}</span></li>
  <li style="margin-bottom: 0; text-align: left;"><strong>Usuario:</strong> <span style="color: #000000;">${username}</span></li>
  <li style="margin-bottom: 0; text-align: left;"><strong>Mensaje:</strong> <span style="color: #000000;">${message}</span></li>
  </ul>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
  <tbody>
  <tr>
  <td class="column column-1" style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
  <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
  <!--[if !vml]><!-->
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>
      `;
};

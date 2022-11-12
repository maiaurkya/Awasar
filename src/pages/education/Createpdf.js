import React, {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import AdmitCard from "../../containers/education/AdmitCard";
import Button from "../../components/button/Button";
import { contactPageData, greeting } from "../../portfolio";

function Createpdf(props) {
const [admitStatus, setAdmitStatus] = useState(false);
const setVisibal = () => {
	setAdmitStatus(true);
};
  const printDocument = () =>{
    const input = document.getElementById('divToPrint');
    html2canvas(input, {useCORS: true}).then(function(canvas) {
      let img = new Image();
      img.src = canvas.toDataURL('image/png');
      img.onload = function () {
        let pdf = new jsPDF('p', 'mm', 'a4', true);
        pdf.addImage(img, 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
        pdf.save('certificate.pdf');
      };
    });
  }

    return (
    <div>
      	<div className="mt4">
        	<div>Title of Component</div> 
        	<div className="mb5">
        	  <button onClick={!admitStatus ? setVisibal : printDocument}>{!admitStatus ? 'Get' : 'Download'} Your Admit Card</button>
      		</div>
      	</div>
      	<div id="divToPrint" className={`'mt4' ${(!admitStatus ? 'hide' :'')}`}>
          <AdmitCard contact={contactPageData} logo={greeting.logo_name}/>
	</div>
    </div>
    );
}
export default Createpdf;

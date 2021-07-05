import React from 'react'
import propTypes from 'prop-types'




export default function header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">


               <a class="nav-link active" aria-current="page" data-bs-toggle="offcanvas" 
                 role="button" aria-controls="offcanvasExample">
                  <button class="btn btn-outline-success me-2"  data-bs-toggle="offcanvas" 
                  data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                  type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>Gps</button></a>
              </li>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" 
aria-labelledby="offcanvasExampleLabel">
 
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Choose :</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" 
    aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Select you choice here. 
    </div>
     <li>
  
 <div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false"> Andhra Pradesh </button>
        <ul class="dropdown-menu">
        
       
        
       
 
        <li> <a class="dropdown-item" href="#">Adoni</a></li>
        <li><a class="dropdown-item" href="#">Amaravati</a></li>
        <li><a class="dropdown-item" href="#">Anantapur</a></li>
        <li><a class="dropdown-item" href="#">Chandragiri</a></li>
        <li><a class="dropdown-item" href="#">Chittoor</a></li>
        <li><a class="dropdown-item" href="#">Dowlaiswaram</a></li>
        <li><a class="dropdown-item" href="#">Eluru</a></li>
        <li><a class="dropdown-item" href="#">Guntur</a></li>
        <li><a class="dropdown-item" href="#">Kadapa</a></li>
        <li><a class="dropdown-item" href="#">Kakinada</a></li>
        <li><a class="dropdown-item" href="#">Kurnool</a></li>
        <li><a class="dropdown-item" href="#">Machilipatnam</a></li>
        <li><a class="dropdown-item" href="#">Nagarjunakoṇḍa</a></li>
        <li><a class="dropdown-item" href="#">Rajahmundry</a></li>
        <li><a class="dropdown-item" href="#">Srikakulam</a></li>
        <li><a class="dropdown-item" href="#">Tirupati</a></li>
        <li><a class="dropdown-item" href="#">Vijayawada</a></li>
        <li><a class="dropdown-item" href="#">Visakhapatnam</a></li>
        <li><a class="dropdown-item" href="#">Vizianagaram</a></li>
        <li><a class="dropdown-item" href="#">Yemmiganur</a></li>
</ul></div></li>
        
        
  
       
        <li>
         <div class="btn-group dropend">
  <button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Arunachal Pradesh</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Itanagar</a></li>
   
  </ul>
</div></li>
<ul>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Assam</button>
        <ul class="dropdown-menu">
        
    <li><a class="dropdown-item" href="#">Dhuburi</a></li>
    <li><a class="dropdown-item" href="#">Dibrugarh</a></li>
    <li><a class="dropdown-item" href="#">Dispur</a></li>
    <li><a class="dropdown-item" href="#">Guwahati</a></li>
    <li><a class="dropdown-item" href="#">Jorhat</a></li>
    <li><a class="dropdown-item" href="#">Nagaon</a></li>
    <li><a class="dropdown-item" href="#">Sibsagar</a></li>
    <li><a class="dropdown-item" href="#">Silchar</a></li>
    <li><a class="dropdown-item" href="#">Tezpur</a></li>
    <li><a class="dropdown-item" href="#">Tinsukia</a></li></ul></div>
    
    </li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Bihar</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Ara</a></li>
        <li><a class="dropdown-item" href="#">Baruni</a></li>
        <li><a class="dropdown-item" href="#">Begusarai</a></li>
        <li><a class="dropdown-item" href="#">Bettiah</a></li>
        <li><a class="dropdown-item" href="#">Bhagalpur</a></li>
        <li><a class="dropdown-item" href="#">Bihar Sharif</a></li>
        <li><a class="dropdown-item" href="#">Bodh Gaya</a></li>
        <li><a class="dropdown-item" href="#">Buxar</a></li>
        <li><a class="dropdown-item" href="#">Chapra</a></li>
        <li><a class="dropdown-item" href="#">Darbhanga</a></li>
        <li><a class="dropdown-item" href="#">Dehri</a></li>
        <li><a class="dropdown-item" href="#">Dinapur Nizamat</a></li>
        <li><a class="dropdown-item" href="#">Gaya</a></li>
        <li><a class="dropdown-item" href="#">Hajipur</a></li>
        <li><a class="dropdown-item" href="#">Jamalpur</a></li>
        <li><a class="dropdown-item" href="#">Katihar</a></li>
        <li><a class="dropdown-item" href="#">Madhubani</a></li>
        <li><a class="dropdown-item" href="#">Motihari</a></li>
        <li><a class="dropdown-item" href="#">Munger</a></li>
        <li><a class="dropdown-item" href="#">Muzaffarpur</a></li>
        <li><a class="dropdown-item" href="#">Patna</a></li>
        <li><a class="dropdown-item" href="#">Purnia</a></li>
        <li><a class="dropdown-item" href="#">Pusa</a></li>
        <li><a class="dropdown-item" href="#">Saharsa</a></li>
        <li><a class="dropdown-item" href="#">Samastipur</a></li>
        <li><a class="dropdown-item" href="#">Sasaram</a></li>
        <li><a class="dropdown-item" href="#">Sitamarhi</a></li>
        <li><a class="dropdown-item" href="#">Siwan</a></li>
        </ul></div>
        </li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Chandigarh</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Chandigarh</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Chhattisgarh</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Ambikapur</a></li>
        <li><a class="dropdown-item" href="#">Bhilai</a></li>
        <li><a class="dropdown-item" href="#">Bilaspur</a></li>
        <li><a class="dropdown-item" href="#">Dhamtari</a></li>
        <li><a class="dropdown-item" href="#">Durg</a></li>      
        <li><a class="dropdown-item" href="#">Jagdalpur</a></li>
        <li><a class="dropdown-item" href="#">Raipur</a></li>
        <li><a class="dropdown-item" href="#">Rajnandgaon</a></li>
        
          </ul></div></li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Dadra and Nagar Haveli</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Silvassa</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Daman and Diu </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Daman</a></li>
        <li><a class="dropdown-item" href="#">Diu</a></li>

        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Delhi </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Delhi</a></li>
        <li><a class="dropdown-item" href="#">New Delhi</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Goa </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Madgaon</a></li>
        <li><a class="dropdown-item" href="#">Panaji</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Gujarat </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Ahemdabad</a></li>
        <li><a class="dropdown-item" href="#">Amreli</a></li>
        <li><a class="dropdown-item" href="#">Bharuch</a></li>
        <li><a class="dropdown-item" href="#">Bhavnagar</a></li>
        <li><a class="dropdown-item" href="#">Bhuj</a></li>
        <li><a class="dropdown-item" href="#">Dwarka</a></li>
        <li><a class="dropdown-item" href="#">Gandhinagar</a></li>
        <li><a class="dropdown-item" href="#">Godhra</a></li>
        <li><a class="dropdown-item" href="#">Jamnagar</a></li>
        <li><a class="dropdown-item" href="#">Junagadh</a></li>
        <li><a class="dropdown-item" href="#">Kandla</a></li>
        <li><a class="dropdown-item" href="#">Khambhat</a></li>
        <li><a class="dropdown-item" href="#">Kheda</a></li>
        <li><a class="dropdown-item" href="#">Mahesana</a></li>
        <li><a class="dropdown-item" href="#">MorviNadiad</a></li>
        <li><a class="dropdown-item" href="#">Navsari</a></li>
        <li><a class="dropdown-item" href="#">Okha</a></li>
        <li><a class="dropdown-item" href="#">Palanpur</a></li>
        <li><a class="dropdown-item" href="#">Patan</a></li>
        <li><a class="dropdown-item" href="#">Porbandar</a></li>
        <li><a class="dropdown-item" href="#">Rajkot</a></li>
        <li><a class="dropdown-item" href="#">Surat</a></li>
        <li><a class="dropdown-item" href="#">Surendranagar</a></li>
        <li><a class="dropdown-item" href="#">Valsad</a></li>
        <li><a class="dropdown-item" href="#">Veraval</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Haryana </button>
        <ul class="dropdown-menu">
        
        <li><a class="dropdown-item" href="#">Ambala</a></li>
        <li><a class="dropdown-item" href="#">Bhiwani</a></li>
        <li><a class="dropdown-item" href="#">Chandigarh</a></li>
        <li><a class="dropdown-item" href="#">Faridabad</a></li>
        <li><a class="dropdown-item" href="#">Firozpur Jhirka</a></li>
        <li><a class="dropdown-item" href="#">Gurgaon</a></li>
        <li><a class="dropdown-item" href="#">Hansi</a></li>
        <li><a class="dropdown-item" href="#">Hisar</a></li>
        <li><a class="dropdown-item" href="#">Jind</a></li>
        <li><a class="dropdown-item" href="#">Kaithal</a></li>
        <li><a class="dropdown-item" href="#">Karnal</a></li>
        <li><a class="dropdown-item" href="#">Kurukshetra</a></li>
        <li><a class="dropdown-item" href="#">Panipat</a></li>
        <li><a class="dropdown-item" href="#">Pehowa</a></li>
        <li><a class="dropdown-item" href="#">Rewari</a></li>
        <li><a class="dropdown-item" href="#">Rohtak</a></li>
        <li><a class="dropdown-item" href="#">Sirsa</a></li>
        <li><a class="dropdown-item" href="#">Sonipat</a></li>

        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Himachal Pradesh </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Delhi</a></li>
        <li><a class="dropdown-item" href="#">New Delhi</a></li>
        <li><a class="dropdown-item" href="#"> Bilaspur</a></li>
        <li><a class="dropdown-item" href="#">Chamba</a></li>
        <li><a class="dropdown-item" href="#">Dalhousie</a></li>
        <li><a class="dropdown-item" href="#">Dharmshala</a></li>
        <li><a class="dropdown-item" href="#">Hamirpur</a></li>
        <li><a class="dropdown-item" href="#">Kangra</a></li>
        <li><a class="dropdown-item" href="#">Kullu</a></li>
        <li><a class="dropdown-item" href="#">Mandi</a></li>
        <li><a class="dropdown-item" href="#">Nahan</a></li>
        <li><a class="dropdown-item" href="#">Shimla</a></li>
        <li><a class="dropdown-item" href="#">Una</a></li>

        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Jammu and Kashmir</button>
        <ul class="dropdown-menu">
        
        <li><a class="dropdown-item" href="#">Anantnag</a></li>
        <li><a class="dropdown-item" href="#">Baramula</a></li>
        <li><a class="dropdown-item" href="#">Doda</a></li>
        <li><a class="dropdown-item" href="#">Gulmarg</a></li>
        <li><a class="dropdown-item" href="#">Jammu</a></li>
        <li><a class="dropdown-item" href="#">Kathua</a></li>
        <li><a class="dropdown-item" href="#">Punch</a></li>
        <li><a class="dropdown-item" href="#">Rajauri</a></li>
        <li><a class="dropdown-item" href="#">Srinagar</a></li>
        <li><a class="dropdown-item" href="#">Udhampu</a></li>
        </ul></div></li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Jharkhand </button>
        <ul class="dropdown-menu">
       
       
        <li><a class="dropdown-item" href="#">Bokaro</a></li>
        <li><a class="dropdown-item" href="#">Chaibasa</a></li>
        <li><a class="dropdown-item" href="#">Deoghar</a></li>
        <li><a class="dropdown-item" href="#">Dhanbad</a></li>
        <li><a class="dropdown-item" href="#">Dumka</a></li>
        <li><a class="dropdown-item" href="#">Giridih</a></li>
        <li><a class="dropdown-item" href="#">Hazaribag</a></li>
        <li><a class="dropdown-item" href="#">Jamshedpur</a></li>
        <li><a class="dropdown-item" href="#">Jharia</a></li>
        <li><a class="dropdown-item" href="#">Rajmahal</a></li>
        <li><a class="dropdown-item" href="#">Ranchi</a></li>
        <li><a class="dropdown-item" href="#">Saraikela</a></li>
        </ul></div></li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Karnataka</button>
        <ul class="dropdown-menu">
       
        
        <li><a class="dropdown-item" href="#">Badami</a></li>
        <li><a class="dropdown-item" href="#">Ballari</a></li>
        <li><a class="dropdown-item" href="#">Bangalore</a></li>
        <li><a class="dropdown-item" href="#">elgavi</a></li>
        <li><a class="dropdown-item" href="#">Bhadravati</a></li>
        <li><a class="dropdown-item" href="#">Bidar</a></li>
        <li><a class="dropdown-item" href="#">Chikkamagaluru</a></li>
        <li><a class="dropdown-item" href="#">Chitradurga</a></li>
        <li><a class="dropdown-item" href="#">Davangere</a></li>
        <li><a class="dropdown-item" href="#">Halebid</a></li>
        <li><a class="dropdown-item" href="#">Hassan</a></li>
        <li><a class="dropdown-item" href="#">Hubballi-Dharwad</a></li>
        <li><a class="dropdown-item" href="#">Kalaburagi</a></li>
        <li><a class="dropdown-item" href="#">Kolar</a></li>
        <li><a class="dropdown-item" href="#">Madikeri</a></li>
        <li><a class="dropdown-item" href="#">Mandya</a></li>
        <li><a class="dropdown-item" href="#">Mangaluru</a></li>
        <li><a class="dropdown-item" href="#">Mysuru</a></li>
        <li><a class="dropdown-item" href="#">Raichur</a></li>
        <li><a class="dropdown-item" href="#">Shivamogga</a></li>
        <li><a class="dropdown-item" href="#">Shravanabelagola</a></li>
        <li><a class="dropdown-item" href="#">Shrirangapattana</a></li>
        <li><a class="dropdown-item" href="#">Tumkuru</a></li>
        </ul></div></li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Kerela </button>
        <ul class="dropdown-menu">
        
        <li><a class="dropdown-item" href="#">Alappuzha</a></li>
        <li><a class="dropdown-item" href="#">Badagara</a></li>
        <li><a class="dropdown-item" href="#">Idukki</a></li>
        <li><a class="dropdown-item" href="#">Kannur</a></li>
        <li><a class="dropdown-item" href="#">Kochi</a></li>
        <li><a class="dropdown-item" href="#">Kollam</a></li>
        <li><a class="dropdown-item" href="#">Kottayam</a></li>
        <li><a class="dropdown-item" href="#">Kozhikode</a></li>
        <li><a class="dropdown-item" href="#">Mattancheri</a></li>
        <li><a class="dropdown-item" href="#">Palakkad</a></li>
        <li><a class="dropdown-item" href="#">Thalassery</a></li>
        <li><a class="dropdown-item" href="#">Thiruvananthapuram</a></li>
        <li><a class="dropdown-item" href="#">Thrissur</a></li>
</ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Ladakh </button>
        <ul class="dropdown-menu">
        
       
        <li><a class="dropdown-item" href="#">Kargil</a></li>
        <li><a class="dropdown-item" href="#">Leh</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Madhya Pradesh </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Balaghat</a></li>
        <li><a class="dropdown-item" href="#">Barwani</a></li>
        <li><a class="dropdown-item" href="#">Betul</a></li>
        <li><a class="dropdown-item" href="#">Bharhut</a></li>
        <li><a class="dropdown-item" href="#">Bhind</a></li>
        <li><a class="dropdown-item" href="#">Bhojpur</a></li>
        <li><a class="dropdown-item" href="#">Bhopal</a></li>
        <li><a class="dropdown-item" href="#">Burhanpur</a></li>
        <li><a class="dropdown-item" href="#">Chhatarpur</a></li>
        <li><a class="dropdown-item" href="#">Chhindwara</a></li>
       <li><a class="dropdown-item" href="#">Damoh</a></li>
        <li><a class="dropdown-item" href="#">Datia</a></li>
       <li><a class="dropdown-item" href="#">Dewas</a></li>
       <li><a class="dropdown-item" href="#">Dhar</a></li>
       <li><a class="dropdown-item" href="#">Guna</a></li>
       <li><a class="dropdown-item" href="#">Gwalior</a></li>
       <li><a class="dropdown-item" href="#">Hoshangabad</a></li>
       <li><a class="dropdown-item" href="#">Indore</a></li>
       <li><a class="dropdown-item" href="#">Itarsi</a></li>
       <li><a class="dropdown-item" href="#">Jabalpur</a></li>
       <li><a class="dropdown-item" href="#">Jhabua</a></li>
       <li><a class="dropdown-item" href="#">Khajuraho</a></li>
       <li><a class="dropdown-item" href="#">Khandwa</a></li>
       <li><a class="dropdown-item" href="#">Khargon</a></li>
       <li><a class="dropdown-item" href="#">Maheshwar</a></li>
       <li><a class="dropdown-item" href="#">Mandla</a></li>
       <li><a class="dropdown-item" href="#">Mandsaur</a></li>
       <li><a class="dropdown-item" href="#">Mhow</a></li>
       <li><a class="dropdown-item" href="#">Morena</a></li>
       <li><a class="dropdown-item" href="#">Murwara</a></li>
       <li><a class="dropdown-item" href="#">Narsimhapur</a></li>
       <li><a class="dropdown-item" href="#">Narsinghgarh</a></li>
       <li><a class="dropdown-item" href="#">Narwar</a></li>
       <li><a class="dropdown-item" href="#">Neemuch</a></li>
       <li><a class="dropdown-item" href="#">Nowgong</a></li>
       <li><a class="dropdown-item" href="#">Orchha</a></li>
       <li><a class="dropdown-item" href="#">Panna</a></li>
       <li><a class="dropdown-item" href="#">Raisen</a></li>
       <li><a class="dropdown-item" href="#">Rajgarh</a></li>
       <li><a class="dropdown-item" href="#">Ratlam</a></li>
       <li><a class="dropdown-item" href="#">Rewa</a></li>
       <li><a class="dropdown-item" href="#">Sagar</a></li>
       <li><a class="dropdown-item" href="#">Sarangpur</a></li>
       <li><a class="dropdown-item" href="#">Satna</a></li>
       <li><a class="dropdown-item" href="#">Sehore</a></li>
       <li><a class="dropdown-item" href="#">Seoni</a></li>
       <li><a class="dropdown-item" href="#">Shahdol</a></li>
       <li><a class="dropdown-item" href="#">Shajapur</a></li>
       <li><a class="dropdown-item" href="#">Sheopur</a></li>
       <li><a class="dropdown-item" href="#">Shivpuri</a></li>
       <li><a class="dropdown-item" href="#">Ujjain</a></li>
       <li><a class="dropdown-item" href="#">Vidisha</a></li>
       </ul></div> </li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Maharashtra </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Delhi</a></li>
        <li><a class="dropdown-item" href="#">New Delhi</a></li>
    
        <li><a class="dropdown-item" href="#"> Ahmadnagar</a></li>
        <li><a class="dropdown-item" href="#">Akola</a></li>
        <li><a class="dropdown-item" href="#">Amravati</a></li>
        <li><a class="dropdown-item" href="#">Aurangabad</a></li>
        <li><a class="dropdown-item" href="#">Bhandara</a></li>
        <li><a class="dropdown-item" href="#">Bhusawal</a></li>
        <li><a class="dropdown-item" href="#">Bid</a></li>
        <li><a class="dropdown-item" href="#">Buldana</a></li>
        <li><a class="dropdown-item" href="#">Chandrapur</a></li>
        <li><a class="dropdown-item" href="#">Daulatabad</a></li>
        <li><a class="dropdown-item" href="#">Dhule</a></li>
        <li><a class="dropdown-item" href="#">Jalgaon</a></li>
        <li><a class="dropdown-item" href="#">Kalyan</a></li>
        <li><a class="dropdown-item" href="#">Karli</a></li>
        <li><a class="dropdown-item" href="#">Kolhapur</a></li>
        <li><a class="dropdown-item" href="#">Mahabaleshwar</a></li>
        <li><a class="dropdown-item" href="#">Malegaon</a></li>
        <li><a class="dropdown-item" href="#">Matheran</a></li>
        <li><a class="dropdown-item" href="#">Mumbai</a></li>
        <li><a class="dropdown-item" href="#">Nagpur</a></li>
        <li><a class="dropdown-item" href="#">Nanded</a></li>
        <li><a class="dropdown-item" href="#">Nashik</a></li>
        <li><a class="dropdown-item" href="#">Osmanabad</a></li>
        <li><a class="dropdown-item" href="#">Pandharpur</a></li>
        <li><a class="dropdown-item" href="#">Parbhani</a></li>
        <li><a class="dropdown-item" href="#">Pune</a></li>
        <li><a class="dropdown-item" href="#">Ratnagiri</a></li>
        <li><a class="dropdown-item" href="#">Sangli</a></li>
        <li><a class="dropdown-item" href="#">Satara</a></li>
        <li><a class="dropdown-item" href="#">Sevagram</a></li>
        <li><a class="dropdown-item" href="#">Solapur</a></li>
        <li><a class="dropdown-item" href="#">Thane</a></li>
        <li><a class="dropdown-item" href="#">Ulhasnagar</a></li>
        <li><a class="dropdown-item" href="#">Vasai-Virar</a></li>
        <li><a class="dropdown-item" href="#">Wardha</a></li>
        <li><a class="dropdown-item" href="#">Yavatmal</a></li>
        </ul></div></li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Manipur </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Imphal</a></li>
        
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Meghalaya </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Cherrapunji</a></li>
        <li><a class="dropdown-item" href="#">Shillong</a></li>
        </ul></div></li>

        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Mizoram </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Aizawl</a></li>
        <li><a class="dropdown-item" href="#">Lunglei</a></li>
        </ul></div></li>






        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Nagaland  </button>
        <ul class="dropdown-menu">
        
        <li><a class="dropdown-item" href="#">Kohima</a></li>
        <li><a class="dropdown-item" href="#">Mon</a></li>
        <li><a class="dropdown-item" href="#">Phek</a></li>
        <li><a class="dropdown-item" href="#">Wokha</a></li>
        <li><a class="dropdown-item" href="#">Zunheboto</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Odisha </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Balangir</a></li>        
        <li><a class="dropdown-item" href="#">Baleshwar</a></li>
        <li><a class="dropdown-item" href="#">Baripada</a></li>
        <li><a class="dropdown-item" href="#">Bhubaneshwar</a></li>
        <li><a class="dropdown-item" href="#">Brahmapur</a></li>
        <li><a class="dropdown-item" href="#">Cuttack</a></li>
        <li><a class="dropdown-item" href="#">Dhenkanal</a></li>
        <li><a class="dropdown-item" href="#">Keonjhar</a></li>
        <li><a class="dropdown-item" href="#">Konark</a></li>
        <li><a class="dropdown-item" href="#">Koraput</a></li>
        <li><a class="dropdown-item" href="#">Paradip</a></li>
        <li><a class="dropdown-item" href="#"> Phulabani</a></li>   
        <li><a class="dropdown-item" href="#">Puri</a></li>
        <li><a class="dropdown-item" href="#">Sambalpur</a></li>
        <li><a class="dropdown-item" href="#">Udayagiri</a></li>
        
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Puducherry  </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Karaikal</a></li>
        <li><a class="dropdown-item" href="#">Mahe</a></li>
        <li><a class="dropdown-item" href="#">Puducherry</a></li>
        <li><a class="dropdown-item" href="#">Yanam</a></li>

        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Punjab  </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Amritsar</a></li>
        <li><a class="dropdown-item" href="#">Batala</a></li>
        <li><a class="dropdown-item" href="#">Chandigarh</a></li>
        <li><a class="dropdown-item" href="#">Faridkot</a></li>
        <li><a class="dropdown-item" href="#">Firozpur</a></li>
        <li><a class="dropdown-item" href="#">Gurdaspur</a></li>
        <li><a class="dropdown-item" href="#">Hoshiarpur</a></li>
        <li><a class="dropdown-item" href="#">Jalandhar</a></li>
        <li><a class="dropdown-item" href="#">Kapurthala</a></li>
        <li><a class="dropdown-item" href="#">Ludhiana</a></li>
        <li><a class="dropdown-item" href="#">Nabha</a></li>
        <li><a class="dropdown-item" href="#">Patiala</a></li>
        <li><a class="dropdown-item" href="#">Rupnagar</a></li>
        <li><a class="dropdown-item" href="#">Sangrur</a></li>
        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Rajasthan </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Abu</a></li>
        <li><a class="dropdown-item" href="#">Ajmer</a></li>
        <li><a class="dropdown-item" href="#">Alwar</a></li>
        <li><a class="dropdown-item" href="#">Amer</a></li>
        <li><a class="dropdown-item" href="#">Barmer</a></li>
        <li><a class="dropdown-item" href="#">Beawar</a></li>
        <li><a class="dropdown-item" href="#">Bharatpur</a></li>
        <li><a class="dropdown-item" href="#">Bhilwara</a></li>
        <li><a class="dropdown-item" href="#">Bikaner</a></li>
        <li><a class="dropdown-item" href="#">Bundi</a></li>
        <li><a class="dropdown-item" href="#">Chittaurgarh</a></li>
        <li><a class="dropdown-item" href="#">Churu</a></li>
        <li><a class="dropdown-item" href="#">Dhaulpur</a></li>
        <li><a class="dropdown-item" href="#">Dungarpur</a></li>
        <li><a class="dropdown-item" href="#">Ganganagar</a></li>
        <li><a class="dropdown-item" href="#">Hanumangarh</a></li>
        <li><a class="dropdown-item" href="#">Jaipur</a></li>
        <li><a class="dropdown-item" href="#">Jaisalmer</a></li>
        <li><a class="dropdown-item" href="#">Jalor</a></li>
        <li><a class="dropdown-item" href="#">Jhalawar</a></li>
        <li><a class="dropdown-item" href="#">Jhunjhunu</a></li>
        <li><a class="dropdown-item" href="#">Jodhpur</a></li>
        <li><a class="dropdown-item" href="#">Kishangarh</a></li>
        <li><a class="dropdown-item" href="#">Kota</a></li>
        <li><a class="dropdown-item" href="#">Merta</a></li>
        <li><a class="dropdown-item" href="#">Nagaur</a></li>
        <li><a class="dropdown-item" href="#">Nathdwara</a></li>
        <li><a class="dropdown-item" href="#">Pali</a></li>
        <li><a class="dropdown-item" href="#">Phalodi</a></li>
        <li><a class="dropdown-item" href="#">Pushkar</a></li>
        <li><a class="dropdown-item" href="#">Sawai Madhopur</a></li>
        <li><a class="dropdown-item" href="#">Shahpura</a></li>
        <li><a class="dropdown-item" href="#">Sikar</a></li>
        <li><a class="dropdown-item" href="#">Sirohi</a></li>
        <li><a class="dropdown-item" href="#">Tonk</a></li>
        <li><a class="dropdown-item" href="#">Udaipur
</a></li>
        

        </ul></div></li>



        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Tamil Nadu</button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Arcot</a></li>
        <li><a class="dropdown-item" href="#">Chengalpattu</a></li>
        <li><a class="dropdown-item" href="#">Chennai</a></li>
        <li><a class="dropdown-item" href="#">Chidambaram</a></li>
        <li><a class="dropdown-item" href="#">Coimbatore</a></li>
        <li><a class="dropdown-item" href="#">Cuddalore</a></li>
        <li><a class="dropdown-item" href="#">Dharmapuri</a></li>
        <li><a class="dropdown-item" href="#">Dindigul</a></li>
        <li><a class="dropdown-item" href="#">Erode</a></li>
        <li><a class="dropdown-item" href="#">Kanchipuram</a></li>
        <li><a class="dropdown-item" href="#">Kanniyakumari</a></li>
        <li><a class="dropdown-item" href="#">Kodaikanal</a></li>
        <li><a class="dropdown-item" href="#">Kumbakonam</a></li>
        <li><a class="dropdown-item" href="#">Madurai</a></li>
<li><a class="dropdown-item" href="#">Mamallapuram</a></li>
<li><a class="dropdown-item" href="#">Nagappattinam</a></li>
<li><a class="dropdown-item" href="#">Nagercoil</a></li>
<li><a class="dropdown-item" href="#">Palayankottai</a></li>
<li><a class="dropdown-item" href="#">Pudukkottai</a></li>
<li><a class="dropdown-item" href="#">Rajapalaiyam</a></li>
<li><a class="dropdown-item" href="#">Ramanathapuram</a></li>
<li><a class="dropdown-item" href="#">Salem</a></li>
<li><a class="dropdown-item" href="#">Thanjavur</a></li>
<li><a class="dropdown-item" href="#">Tiruchchirappalli</a></li>
<li><a class="dropdown-item" href="#">Tirunelveli</a></li>
<li><a class="dropdown-item" href="#">Tiruppur</a></li>
<li><a class="dropdown-item" href="#">Tuticorin</a></li>
<li><a class="dropdown-item" href="#">Udhagamandalam</a></li>
<li><a class="dropdown-item" href="#">Vellore
</a></li>
        

        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Telangana </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Hyderabad</a></li>
        <li><a class="dropdown-item" href="#">Karimnagar</a></li>
        <li><a class="dropdown-item" href="#">Khammam</a></li>
        <li><a class="dropdown-item" href="#">Mahbubnagar</a></li>
        <li><a class="dropdown-item" href="#">Nizamabad</a></li>
        <li><a class="dropdown-item" href="#">Sangareddi</a></li>
        <li><a class="dropdown-item" href="#">Warangal
</a></li>
        

        </ul></div> </li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Tripura</button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Agartala</a></li>

        </ul></div></li>
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Uttar Pradesh</button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Agra</a></li>
<li><a class="dropdown-item" href="#">Aligarh</a></li>
<li><a class="dropdown-item" href="#">Amroha</a></li>
<li><a class="dropdown-item" href="#">Ayodhya</a></li>
<li><a class="dropdown-item" href="#">Azamgarh</a></li>
<li><a class="dropdown-item" href="#">Bahraich</a></li>
<li><a class="dropdown-item" href="#">Ballia</a></li>
<li><a class="dropdown-item" href="#">Banda</a></li>
<li><a class="dropdown-item" href="#">Bara Banki</a></li>
<li><a class="dropdown-item" href="#">Bareilly</a></li>
<li><a class="dropdown-item" href="#">Basti</a></li>
<li><a class="dropdown-item" href="#">Bijnor</a></li>
<li><a class="dropdown-item" href="#">Bithur</a></li>
<li><a class="dropdown-item" href="#">Budaun</a></li>
<li><a class="dropdown-item" href="#">Bulandshahr</a></li>
<li><a class="dropdown-item" href="#">Deoria</a></li>
<li><a class="dropdown-item" href="#">Etah</a></li>
<li><a class="dropdown-item" href="#">Etawah</a></li>
<li><a class="dropdown-item" href="#">Faizabad</a></li>
<li><a class="dropdown-item" href="#">Farrukhabad-cum-Fatehgarh</a></li>
<li><a class="dropdown-item" href="#">Fatehpur</a></li>
<li><a class="dropdown-item" href="#">Fatehpur Sikri</a></li>
<li><a class="dropdown-item" href="#">Ghaziabad</a></li>
<li><a class="dropdown-item" href="#">Ghazipur</a></li>
<li><a class="dropdown-item" href="#">Gonda</a></li>
<li><a class="dropdown-item" href="#">Gorakhpur</a></li>
<li><a class="dropdown-item" href="#">Hamirpur</a></li>
<li><a class="dropdown-item" href="#">Hardoi</a></li>
<li><a class="dropdown-item" href="#">Hathras</a></li>
<li><a class="dropdown-item" href="#">Jalaun</a></li>
<li><a class="dropdown-item" href="#">Jaunpur</a></li>
<li><a class="dropdown-item" href="#">Jhansi</a></li>
<li><a class="dropdown-item" href="#">Kannauj</a></li>
<li><a class="dropdown-item" href="#">Kanpur</a></li>
<li><a class="dropdown-item" href="#">Lakhimpur</a></li>
<li><a class="dropdown-item" href="#">Lalitpur</a></li>
<li><a class="dropdown-item" href="#">Lucknow</a></li>
<li><a class="dropdown-item" href="#">Mainpuri</a></li>
<li><a class="dropdown-item" href="#">Mathura</a></li>
<li><a class="dropdown-item" href="#">Meerut</a></li>
<li><a class="dropdown-item" href="#">Mirzapur-Vindhyachal</a></li>
<li><a class="dropdown-item" href="#">Moradabad</a></li>
<li><a class="dropdown-item" href="#">Muzaffarnagar</a></li>
<li><a class="dropdown-item" href="#">Partapgarh</a></li>
<li><a class="dropdown-item" href="#">Pilibhit</a></li>
<li><a class="dropdown-item" href="#">Prayagraj</a></li>
<li><a class="dropdown-item" href="#">Rae Bareli</a></li>
<li><a class="dropdown-item" href="#">Rampur</a></li>
<li><a class="dropdown-item" href="#">Saharanpur</a></li>
<li><a class="dropdown-item" href="#">Sambhal</a></li>
<li><a class="dropdown-item" href="#">Shahjahanpur</a></li>
<li><a class="dropdown-item" href="#">Sitapur</a></li>
<li><a class="dropdown-item" href="#">Sultanpur</a></li>
<li><a class="dropdown-item" href="#">Tehri</a></li>
<li><a class="dropdown-item" href="#">Varanasi</a></li>

        

        </ul></div></li> 
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">Uttrakhand  </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Almora</a></li>
        <li><a class="dropdown-item" href="#">Dehra Dun</a></li>
        <li><a class="dropdown-item" href="#">Haridwar</a></li>
        <li><a class="dropdown-item" href="#">Mussoorie</a></li>
        <li><a class="dropdown-item" href="#">Nainital</a></li>
        <li><a class="dropdown-item" href="#">Pithoragarh</a></li>

        

        </ul></div></li> 
        <li><div class="btn-group dropend"><button type="button" class="btn btn-outline-secondary" data-bs-toggle="dropdown" aria-expanded="false">West Bengal </button>
        <ul class="dropdown-menu">
        
        
        <li><a class="dropdown-item" href="#">Alipore</a></li>
        <li><a class="dropdown-item" href="#">Alipur Duar</a></li>
        <li><a class="dropdown-item" href="#">Asansol</a></li>
        <li><a class="dropdown-item" href="#">Baharampur</a></li>
        <li><a class="dropdown-item" href="#">Bally</a></li>
        <li><a class="dropdown-item" href="#">Balurghat</a></li>
        <li><a class="dropdown-item" href="#">Bankura</a></li>
        <li><a class="dropdown-item" href="#">Baranagar</a></li>
        <li><a class="dropdown-item" href="#">Barasat</a></li>
        <li><a class="dropdown-item" href="#">Barrackpore</a></li>
        <li><a class="dropdown-item" href="#">Basirhat</a></li>
        <li><a class="dropdown-item" href="#">Bhatpara</a></li>
        <li><a class="dropdown-item" href="#">Bishnupur</a></li>
        <li><a class="dropdown-item" href="#">Budge Budge</a></li>
        <li><a class="dropdown-item" href="#">Burdwan</a></li>
        <li><a class="dropdown-item" href="#">Chandernagore

</a></li><li><a class="dropdown-item" href="#">Darjiling</a></li><li><a class="dropdown-item" href="#">Diamond Harbour</a></li><li><a class="dropdown-item" href="#">Dum Dum</a></li>
<li><a class="dropdown-item" href="#">Durgapur</a></li><li><a class="dropdown-item" href="#">Halisahar</a></li><li><a class="dropdown-item" href="#">Haora</a></li>
<li><a class="dropdown-item" href="#">Hugli</a></li><li><a class="dropdown-item" href="#">Ingraj Bazar</a></li><li><a class="dropdown-item" href="#">Jalpaiguri</a></li> 
<li><a class="dropdown-item" href="#">Kalimpong</a></li><li><a class="dropdown-item" href="#">Kamarhati</a></li><li><a class="dropdown-item" href="#">Kanchrapara</a></li>
<li><a class="dropdown-item" href="#">Kharagpur</a></li> 
<li><a class="dropdown-item" href="#">Koch Bihar</a></li> 
<li><a class="dropdown-item" href="#">Kolkata</a></li> 
<li><a class="dropdown-item" href="#">Krishnanagar</a></li> 
<li><a class="dropdown-item" href="#">Malda</a></li>
<li><a class="dropdown-item" href="#">Midnapore</a></li> 
<li><a class="dropdown-item" href="#">Murshidabad</a></li> 
<li><a class="dropdown-item" href="#">Navadwip</a></li> 
<li><a class="dropdown-item" href="#">Palashi</a></li> 
<li><a class="dropdown-item" href="#">Panihati</a></li> 
<li><a class="dropdown-item" href="#">Purulia</a></li> 
<li><a class="dropdown-item" href="#">Raiganj</a></li> 
<li><a class="dropdown-item" href="#">Santipur</a></li> 
<li><a class="dropdown-item" href="#">Shantiniketan</a></li> 
<li><a class="dropdown-item" href="#">Shrirampur</a></li>
        <li><a class="dropdown-item" href="#">Siliguri</a></li>
        <li><a class="dropdown-item" href="#">Siuri</a></li>
        <li><a class="dropdown-item" href="#">Tamluk</a></li>
        <li><a class="dropdown-item" href="#">Titagarh</a></li>

        </ul></div></li>
        
      </ul>
    </div>
  </div>
  

               
<li className="nav-item">   
      <p>
        <a class="nav-link active" aria-current="page" tabindex="-1" data-bs-toggle="collapse" aria-disabled="true"
        aria-disabled="true" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           <button class="btn btn-outline-success me-2" type="button" data-bs-toggle="tooltip" 
data-bs-placement="bottom" title="India is a huge country in Asia with 1,203,685.0 sq mi area (3,287,263.0 km2). 1,210,193,422 local people 
live there, the population density is high, circa 953 / square miles (368 / km2). The international phone 
area code is +91 and they use the .in for internet tld. Current local time in India: June 25, 2021, 11:20 am. 
The geometric center of the country is approximately
 at 20.5937 latitude, 78.9629 longitude. The capital city of India is New Delhi.">About</button> 
        </a>
      </p>
      
</li>
            
            
            
            
            
            
            
            <li>
            <a class="nav-link active" href="#" tabindex="" aria-disabled="true" >
            <button class="btn btn-outline-success me-2" type="button" >
            Home</button></a>

</li>

            









            







              <li className="nav-item">
               
              
             

      <p>
        <a class="nav-link disable" aria-current="page" tabindex="-1" data-bs-toggle="collapse" 
        aria-disabled="true" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
           <button class="btn btn-outline-success me-2" type="button" data-bs-toggle="tooltip" 
data-bs-placement="bottom" title="GO TO googleMaps to see further information">Help?</button>
        </a>
      </p>


</li>
</ul>























            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : ""}
          </div>
        </div>
      </nav>
    
            
        
    )
}
header.defaultProps ={
  title: "Your title here",
  searchBar:true
}

header.propTypes ={
title: propTypes.string,
searchBar: propTypes.bool.isRequired


}

import React from "react";
import Contactus from "../referencespage/Contactus"
function About() {
  return (
    <section>
       <div className="flex flex-col items-center justify-center py-8 md:py-16 lg:py-16">
      <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">O Nama</h1>
      <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">Dugogodisnje iskustvo proizvodnje i ugradnje betonske galanterije</p>
    </div>
    <div className="container px-5 pb-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://plus.unsplash.com/premium_photo-1678134786603-181eb8872283?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            
            
          </div>
          <div>
          <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4"> Kompanija Behamont osnovana je 2007. godine. <br/> <br/>
        U toku svog razvoja preduzeće je dosta ulagalo u opremu, ali je svakako najveću investiciju uvek predstavljao stručno osposobljen kadar. Kvalitet betonskih proizvoda je doveden na viši nivo, kao i kapacitet proizvodnje.</p>
            
          </div>
          <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">Naši proizvodi su proizvedeni po češkoj tehnologiji, sa kvalitetnim drobljenim kamenom, različitih granulata, obojeni sa Bazer-oksidnim bojama koje garantuju dugogodišnju postojanost u svim vremenskim prilikama. Proizvodimo i prodajemo betonsku galanteriju (behaton ploče, ivičnjake i slivnike) za popločavanje staza, dvorišta, bašta, prostora oko bazena, trotoara, trgova i drugih površina koje zahtevaju izdržljive, kvalitetne i dekorativne obloge. Prednosti površina obloženih našim pločama su izdržljivost na pritisak tereta, lijep dizajn(barok ploče), otporne su na ekstremna atmosferska opterećenja (snijeg, mraz, kiša), glatke su i ne kližu se, a u slučaju potrebe veoma lako se podižu i ponovopostavljaju.</p>
            
          </div>
          </div>
        </div>
      </div>
      
    </div>
    <Contactus/>



  </section>
      
  );
}

export default About;
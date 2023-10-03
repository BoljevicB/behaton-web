function About() {
  return (
    <section>
        
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 md:pt-10 lg:pt-14"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full"
      >
        <img
          alt="Office"
          src="https://plus.unsplash.com/premium_photo-1661346015154-b890ad6e39cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">O NAMA</h2>

        <p className="mt-4 text-gray-600">
        Kompanija Behamont osnovana je 2007. godine. <br/> <br/>
        U toku svog razvoja preduzeće je dosta ulagalo u opremu, ali je svakako najveću investiciju uvek predstavljao stručno osposobljen kadar. Kvalitet betonskih proizvoda je doveden na viši nivo, kao i kapacitet proizvodnje.
        </p>
      </div>
    </div>
  </div>

  <div
    className="mx-auto max-w-screen-xl px-4 py-8 md:py-4 lg:py-4"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Mission"
          src="https://images.unsplash.com/photo-1657045898616-a9ba03336fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Ekonomični, stručni i opremljeni</h2>

        <p className="mt-4 text-gray-600">
        Tehnološki postupak izrade je mašinski, u kalup formatima, tako da je moguća izrada većeg broja istih elemenata. Naš kupac nikada nije prepušten samom sebi. Pored izrade, vršimo i ugradnju svih elemenata u skladu sa dogovorom i željama komintenata. Vaše je da odlučite i da nam se javite, a mi smo tu da Vam pomognemo i realizujemo sve Vaše želje.
        </p>
      </div>
    </div>
  </div>



        
    </section>
      
  );
}

export default About;
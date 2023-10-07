import React from 'react'

const Ourwork = () => {
  return (
    <div class="p-4">
    <div class="container mx-auto lg:pt-2">
        <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
        Behaton – praktičnost i estetika u jednom.


        </h1>
        <p class="text-gray-700 text-lg text-center mb-12">
        Arhitektura i beton su neraskidiva sinergija discipline i materijala koja je stvorila novu umetnost - Umetnost popločavanja.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-100">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Usluge</h2>
                <p class="text-gray-700">
                Proizvodnja, prodaja i ugradnja betonske galanterije.
                </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-100">
                <h2 class="text-xl font-bold text-gray-800 mb-4">O nama</h2>
                <p class="text-gray-700">
                Mi se bavi proizvodnjom ekskluzivne betonske galanterije sa širokom paletom proizvoda.
                </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8 hover:bg-gray-100">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Kontakt</h2>
                <p class="text-gray-700">
                Tel - +382123456<br/>
                E-mail - behamont@mail.com
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Ourwork
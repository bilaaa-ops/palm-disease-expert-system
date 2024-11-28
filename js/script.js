// Fungsi untuk mencari solusi berdasarkan nama hama
function getSolution() {
    // Ambil nilai nama hama dari input
    var pestName = document.getElementById('pest-name').value.trim().toLowerCase();
    var solutionDiv = document.getElementById('solution');

    // Solusi dasar untuk beberapa hama
    var solutions = {
        'ulat api': 'Untuk menanggulangi ulat api pada kelapa sawit, kamu dapat melakukan: \n' +
                     '1. Penyemprotan pestisida organik. \n' +
                     '2. Pengendalian secara mekanis, yaitu dengan memungut dan menghancurkan ulat-ulat tersebut. \n' +
                     '3. Menggunakan predator alami seperti burung atau kumbang pemangsa ulat.',
        
        'thrips': 'Thrips dapat dikendalikan dengan: \n' +
                  '1. Penyemprotan insektisida berbahan aktif pyrethroid. \n' +
                  '2. Menggunakan perangkap kuning untuk menarik thrips. \n' +
                  '3. Mengatur kelembaban tanah dan sanitasi area tanam.',
        
        'kumbang tanduk': 'Untuk mengatasi kumbang tanduk pada kelapa sawit, lakukan hal berikut: \n' +
                           '1. Gunakan insektisida yang sesuai dengan spesifikasi untuk kumbang tanduk. \n' +
                           '2. Periksa secara berkala tanaman untuk mencegah infestasi lebih lanjut. \n' +
                           '3. Jaga kebersihan kebun dan hilangkan tempat tinggal kumbang.',
        
        'ulat kantong': 'Solusi untuk ulat kantong pada kelapa sawit: \n' +
                    '1. Semprotkan insektisida kontak atau sistemik. \n' +
                    '2. Kumpulkan dan musnahkan kantong ulat secara manual. \n' +
                    '3. Introduksi parasitoid alami.',

        'tungau merah': 'Untuk mengatasi tungau merah pada kelapa sawit: \n' +
                    '1. Gunakan akarisida sesuai anjuran. \n' +
                    '2. Jaga kelembaban di sekitar area tanam. \n' +
                    '3. Rotasi tanaman untuk mengurangi infestasi.',

        'belalang kelapa sawit': 'Mengendalikan belalang pada kelapa sawit: \n' +
                             '1. Semprotkan insektisida kontak. \n' +
                             '2. Perangkap mekanis untuk belalang dewasa. \n' +
                             '3. Introduksi burung pemakan belalang.',

        'ulat bulu': 'Solusi untuk ulat bulu pada kelapa sawit: \n' +
                 '1. Gunakan insektisida berbahan aktif Bacillus thuringiensis. \n' +
                 '2. Lakukan pengendalian mekanis dengan memungut ulat. \n' +
                 '3. Introduksi predator alami seperti semut rangrang.',

        'penggerek batang kelapa sawit': 'Untuk mengatasi penggerek batang: \n' +
                                     '1. Gunakan insektisida sistemik. \n' +
                                     '2. Potong dan musnahkan bagian batang yang terinfeksi. \n' +
                                     '3. Monitoring secara berkala.',

        'ngengat Tirathaba': 'Mengatasi ngengat Tirathaba pada kelapa sawit: \n' +
                         '1. Semprotkan insektisida pada fase larva. \n' +
                         '2. Perangkap feromon untuk mengurangi populasi ngengat dewasa. \n' +
                         '3. Sanitasi lingkungan kebun.',

        'kumbang sagu': 'Solusi untuk kumbang sagu pada kelapa sawit: \n' +
                    '1. Gunakan perangkap feromon. \n' +
                    '2. Semprotkan insektisida pada batang yang terserang. \n' +
                    '3. Buang sisa tanaman yang dapat menjadi sarang kumbang.',

        'ulat daun Tirathaba': 'Untuk ulat daun Tirathaba: \n' +
                           '1. Gunakan insektisida berbahan aktif sesuai rekomendasi. \n' +
                           '2. Pemangkasan daun yang terserang. \n' +
                           '3. Introduksi parasitoid seperti Trichogramma.',

         'hama ganoderma': 'Pengendalian hama ganoderma pada kelapa sawit: \n' +
                      '1. Gunakan fungisida berbahan aktif sesuai anjuran. \n' +
                      '2. Jaga kebersihan kebun untuk mencegah penyebaran spora. \n' +
                      '3. Tanam bibit kelapa sawit yang tahan terhadap ganoderma.',

        'kutu putih kelapa sawit': 'Mengatasi kutu putih pada kelapa sawit: \n' +
                               '1. Semprotkan insektisida berbahan aktif imidakloprid. \n' +
                               '2. Introduksi kepik predator. \n' +
                               '3. Bersihkan area tanaman secara rutin.',

        'rayap': 'Mengendalikan rayap pada kelapa sawit: \n' +
             '1. Gunakan insektisida berbahan aktif klorpirifos. \n' +
             '2. Hilangkan sisa-sisa kayu di sekitar tanaman. \n' +
             '3. Periksa dan pantau secara berkala untuk mencegah serangan.',

        'kumbang badak': 'Untuk mengatasi kumbang badak pada kelapa sawit: \n' +
                     '1. Gunakan perangkap feromon untuk menangkap kumbang dewasa. \n' +
                     '2. Semprotkan insektisida pada area yang terinfestasi. \n' +
                     '3. Jaga sanitasi kebun dan hilangkan tumpukan bahan organik.',

         'ulat pucuk': 'Mengatasi ulat pucuk pada kelapa sawit: \n' +
                  '1. Semprotkan insektisida selektif pada area yang terserang. \n' +
                  '2. Potong dan musnahkan pucuk yang terserang. \n' +
                  '3. Introduksi parasitoid alami.',

         'hama tikus': 'Pengendalian hama tikus pada kelapa sawit: \n' +
                  '1. Gunakan umpan beracun sesuai rekomendasi. \n' +
                  '2. Pasang perangkap mekanis. \n' +
                  '3. Introduksi predator alami seperti burung hantu.'
        };
    // Jika hama yang dimasukkan ada dalam daftar solusi
    if (solutions[pestName]) {
        solutionDiv.innerText = solutions[pestName];
    } else {
        solutionDiv.innerText = 'Maaf, solusi untuk hama ini tidak tersedia. Pastikan nama hama sudah benar.';
    }
}

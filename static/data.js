export const navigationMenus = [
  {
    id: 1,
    title: 'Kajian',
    link: '/kajian',
    items: []
  },
  {
    id: 2,
    title: 'Kegiatan',
    link: '/kegiatan',
    items: []
  },
  {
    id: 3,
    title: 'Galeri Rasulullah',
    link: 'https://www.youtube.com/',
    items: []
  },
  {
    id: 4,
    title: 'Profil',
    link: '/profil',
    items: [
      {
        id: 1,
        title: 'Sejarah Masjid Raya Al Jabbar',
        description: 'Masjid Raya Al Jabbar mulai didesain tahun 2015 oleh Ridwan Kamil sebagai Masjid Raya tingkat Pemerintah Daerah Provinsi. Bangunan utama dirancang dengan luas lantai 99 x 99 m2 sesuai angka Asmaul Husna.',
        icon: '/icons/dome.svg',
        link: '/sejarah'
      },
      {
        id: 2,
        title: 'Keistimewaan Masjid Raya Al Jabbar',
        description: 'Masjid Al Jabbar memiliki keistimewaan seperti arsitektur ikonik, masjid terapung, empat menara, ruang shalat monumental, museum, tata cahaya, pusat edukasi dan rekreasi religi.',
        icon: '/icons/dome.svg',
        link: '/keistimewaan'
      },
      {
        id: 1,
        title: 'Fasilitas Masjid Raya Al Jabbar',
        description: 'Fasilitas yang terdapat di Masjid Al Jabbar meliputi tempat wudhu outdoor, area shalat utama, lantai mezanin, relung, museum Nabi Muhammad, koridor, jembatan Nabi Musa, patung Al Jabbar, perpustakaan, ruang edukasi, dll.',
        icon: '/icons/dome.svg',
        link: '/fasilitas'
      },
    ]
  }
]

export const profile = Object.freeze(
  {
    features: {
      title: 'Keistimewaan Masjid Raya Al Jabbar',
      subtitle: 'Masjid Raya Al Jabbar juga memiliki beberapa keistimewaan seperti arsitektur ikonik, masjid terapung, empat menara, ruang shalat monumental, museum, tata cahaya, pusat edukasi dan rekreasi edukasi.',
      data: []
    },
    facilities: {
      title: 'Fasilitas Masjid Raya Al Jabbar',
      subtitle: 'Fasilitas yang terdapat di Masjid Raya Al Jabbar meliputi tempat wudhu outdoor, area shalat utama, lantai mezanin, relung, museum Rasulullah, koridor, jembatan nabi musa, patung Al Jabbar, perpustakaan, ruang edukasi dan danau wisata.',
      data: []
    },
    histories: {
      title: 'Sejarah Masjid Raya Al Jabbar',
      subtitle: 'Masjid Raya Al Jabbar mulai didesain tahun 2015 oleh Ridwan Kamil sebagai Masjid Raya tingkat Pemerintah Daerah Provinsi. Bangunan utama dirancang dengan luas lantai 99 x 99 m2 sesuai angka Asmaul Husna.',
      data: []
    },
  },
)

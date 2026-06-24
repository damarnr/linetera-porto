import naruImg from '../assets/cardportnaru.png';
import seladataImg from '../assets/cardportseldat.png';
import careshoeImg from '../assets/cardportcareshoe.png';

export const projects = [
  {
    id: 1,
    title: 'SelaData',
    subtitle: 'Real-Time Hydroponic Monitoring & Precision Agriculture System',
    caseStudy: {
      problem: "Pemantauan hidroponik umumnya dilakukan secara manual secara berkala, memakan waktu, dan sangat rentan terhadap kegagalan panen jika kondisi lingkungan (suhu, pH) tiba-tiba berubah tanpa diketahui oleh petani.",
      solution: "SelaData dibangun sebagai sistem pemantauan real-time berbasis IoT. Dengan mengintegrasikan perangkat keras sensor dengan aplikasi mobile, sistem ini mendigitalisasi pertanian presisi. Visualisasi data instan dan sistem peringatan dini otomatis (early warning system) memastikan petani dapat mengontrol kualitas nutrisi secara akurat dari mana saja."
    },
    techDetails: [
      { category: 'Core Programming', value: 'Dart & C++' },
      { category: 'Mobile Interface', value: 'Flutter' },
      { category: 'Real-Time Database', value: 'Firebase' },
      { category: 'IoT & Hardware', value: 'ESP32, Sensor DHT22 & pH' },
      { category: 'Data Visualization', value: 'Flutter Charts' },
      { category: 'Network Gateway', value: 'MQTT / HTTP Protocol' }
    ],
    tags: ['Flutter', 'ESP32', 'Firebase', 'MQTT'],
    link: '#',
    image: seladataImg
  },
  {
    id: 2,
    title: 'NARU Bimbel',
    subtitle: 'Integrated Landing Page & Conversion System',
    caseStudy: {
      problem: "Lembaga bimbingan belajar seringkali kehilangan potensi pendaftaran siswa baru secara online akibat proses pendaftaran (funnel) yang rumit dan informasi yang tidak terstruktur dengan baik.",
      solution: "Kami merancang platform landing page interaktif yang mengoptimalkan pemasaran dan konversi. Dilengkapi form pintar untuk memilih tiga metode belajar berbeda, sistem ini mengotomatisasi pengiriman data calon siswa langsung menuju WhatsApp Admin tanpa memerlukan infrastruktur backend (serverless), sehingga menekan biaya operasional."
    },
    techDetails: [
      { category: 'Core Language', value: 'JavaScript / TypeScript' },
      { category: 'Frontend', value: 'React.js & Vite' },
      { category: 'Styling & UI', value: 'Tailwind CSS' },
      { category: 'Animations', value: 'Framer Motion' },
      { category: 'Data Persistence', value: 'Serverless / Local Storage' },
      { category: 'Integration', value: 'WhatsApp API' }
    ],
    tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'WhatsApp API'],
    link: '#',
    image: naruImg
  },
  {
    id: 3,
    title: 'CareShoe',
    subtitle: 'Smart Laundry & Footwear Treatment Management System',
    caseStudy: {
      problem: "Usaha laundry sepatu sering menghadapi kendala operasional dalam pencatatan pesanan manual (nota kertas), pelacakan sepatu yang hilang/tertukar, dan komunikasi status pengerjaan yang lambat kepada pelanggan.",
      solution: "CareShoe mendigitalisasi seluruh alur transaksi. Aplikasi ini mengelola inventaris mulai dari drop-off, penentuan jenis treatment (deep clean, repaint), hingga pelacakan status pengerjaan secara real-time. Sistem ini juga terintegrasi dengan WhatsApp Gateway untuk mengirimkan notifikasi otomatis saat sepatu selesai dikerjakan, meningkatkan transparansi layanan."
    },
    techDetails: [
      { category: 'Backend Language', value: 'PHP' },
      { category: 'Frontend Language', value: 'JavaScript' },
      { category: 'Backend Framework', value: 'Laravel' },
      { category: 'Database', value: 'MySQL' },
      { category: 'UI Framework', value: 'Tailwind CSS' },
      { category: 'Notifications', value: 'WhatsApp Gateway' }
    ],
    tags: ['Laravel', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    link: '#',
    image: careshoeImg
  }
];

import naruImg from '../assets/cardportnaru.png';
import seladataImg from '../assets/cardportseldat.png';
import careshoeImg from '../assets/cardportcareshoe.png';

export const projects = [
  {
    id: 1,
    title: 'SelaData',
    subtitle: 'Real-Time Hydroponic Monitoring & Precision Agriculture System',
    description: `SelaData adalah platform sistem pemantauan (monitoring) real-time berbasis IoT (Internet of Things) yang dirancang khusus untuk mengoptimalkan budidaya tanaman selada menggunakan metode hidroponik DFT (Deep Flow Technique). Sistem ini mengintegrasikan perangkat keras sensorik dengan aplikasi mobile interaktif untuk mendigitalisasi pemeliharaan pertanian presisi secara akurat. Dengan berfokus pada efisiensi operasional petani modern, SelaData menyajikan visualisasi data kondisi lingkungan secara instan dan menyediakan sistem peringatan dini otomatis (early warning system) untuk mempermudah kontrol kualitas nutrisi serta meminimalkan risiko kegagalan panen tanpa perlu pengecekan manual secara berkala.`,
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
    description: `NARU Bimbel adalah platform landing page berbasis web modern yang dirancang khusus untuk mendigitalisasi strategi pemasaran dan mengoptimalkan konversi pendaftaran siswa baru secara efektif. Aplikasi ini menyajikan profil bimbingan belajar secara interaktif serta dilengkapi dengan fitur carousel testimoni dinamis, yang dipadukan dengan form pendaftaran pintar tiga metode belajar. Sistem ini berfokus pada efisiensi operasional dengan mengotomatisasi alur data calon siswa langsung menuju WhatsApp Admin tanpa memerlukan infrastruktur backend yang rumit.`,
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
    description: `CareShoe adalah platform sistem manajemen operasional pencucian dan perawatan sepatu (shoes laundry) berbasis web yang dirancang untuk menyederhanakan alur transaksi, pengelolaan inventaris, dan pelacakan status pengerjaan secara real-time. Sistem ini mengintegrasikan pencatatan pesanan pelanggan mulai dari tahap drop-off, penentuan jenis treatment (seperti deep clean, unyellowing, atau repaint), hingga notifikasi otomatis saat sepatu siap diambil. Dengan fokus pada efisiensi bisnis retail, CareShoe membantu pemilik usaha meminimalkan kesalahan pencatatan manual dan meningkatkan transparansi layanan kepada pelanggan.`,
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

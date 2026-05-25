import { Project } from '../types';
import chickenImg from '../images/chicken.jpg';
import carromImg from '../images/carrom.jpg';
import chinnarasuImg from '../images/chinnarasu.png';
import digitalImg from '../images/digital.jpeg';

export const projectsData: Project[] = [
  {
    title: 'Smart Chicken Freshness Detection System',
    description:
      'Membrane-based embedded sensor system on ATmega to classify chicken freshness pre/post-cooking via gas emission patterns. Python classification pipeline achieved 92% accuracy across 200+ samples (35% fewer false positives vs baseline). Won ₹10 Lakhs GENESIS grant and Hackathon Best Project — validated as production-viable.',
    techUsed: 'Python, Embedded C, ATmega, IoT, Sensor Fusion',
    image: { url: chickenImg },
  },
  {
    title: 'Leaf Identification System',
    description:
      'End-to-end ML pipeline: data collection, CLAHE preprocessing, HOG + color histogram features, SVM classifier for 15 plant species. 88% accuracy on 1,500 images; inference under 200 ms per image for edge deployment.',
    techUsed: 'Python, Scikit-learn, OpenCV, MediaPipe',
    image: { url: 'https://picsum.photos/seed/leaf-ml/600/400' },
  },
  {
    title: 'Python AI Carrom Board & Chess Engine',
    description:
      'Carrom AI with physics-based strike simulation (angle/velocity). Chess engine using Minimax with alpha-beta pruning (depth-4). Sub-100 ms Chess moves and 60 FPS Carrom via NumPy vectorisation; CustomTkinter UI.',
    techUsed: 'Python, CustomTkinter, NumPy, Minimax',
    image: { url: carromImg },
  },
  {
    title: 'CHINRASSU Robot — Hack Tamilagam',
    description:
      'Multi-sensor autonomous robot built in 24 hours: IR obstacle avoidance, ultrasonic ranging, PWM differential drive on ATmega328P. Real-time navigation in Embedded C; completed all challenge rounds at state-level Hack Tamilagam.',
    techUsed: 'Embedded C, ATmega, Motor Control, Sensors',
    image: { url: chinnarasuImg },
  },
  {
    title: '5G Communication Performance Analysis',
    description:
      'Simulated 5G NR waveforms (OFDM, beamforming) in MATLAB Simulink. Benchmarked BER and throughput across SNR ranges; documented LTE vs 5G KPI comparison.',
    techUsed: 'MATLAB, Simulink, Signal Processing',
    image: { url: 'https://picsum.photos/seed/5g-analysis/600/400' },
  },
  {
    title: 'Digital Communication circuit simulation using multisim',
    description:
      'This project is a **Digital Communication circuit simulation** created in **Multisim** using an operational amplifier (AD741CN). It demonstrates basic signal processing, amplification, and waveform analysis using an oscilloscope, helping understand fundamental communication system concepts.',
    techUsed: 'Multisim',
    image: { url: digitalImg },
  },
];

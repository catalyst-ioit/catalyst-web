export interface Project {
	id: string;
    title: string;
	subtitle: string;
	category: string;
	subcategory: string;
	src: string;
	lead: string;
	team: string[];
	description: string;
	features: string[];
	imageUrl: string;
}

export const currentProjectsData: Project[] = [
	{
		id: "marut",
		title: "marut",
		subtitle:
			"Advanced ARM Cortex-M4 based FCU with fixed wing and multi rotor support",
		category: "Hardware",
		subcategory: "Embedded Systems & Hardware",
		src: '/projects/marut.JPG',
		lead: "Aryan Basnet (TY E&TC)",
		team: [
			"Siddesh Vatvikar (SY E&TC)",
			"Sharal Vishwakarma (SY E&TC)",
			"Karan Tikoo (TY COMP)",
			"Yash Tawar (SY E&TC)",
			"Shreyas (FY)",
		],
		description:
			"Marut is an advanced Flight Control Unit (FCU) being developed at AISSMS IOIT in collaboration with Team Aeroguardians. It combines cutting-edge control algorithms, real-time telemetry, and autonomous navigation for both fixed-wing and quadrotor aircraft. Built for precision, reliability, and innovation, Marut aims to set a new standard in Aerospace flight control R&D.",
		features: [
			"Design and develop a fully functional, indigenous Flight Control Unit (FCU) optimized for research-level drone and UAV projects.",
			"Create a foundational FCU for customization across various drone applications (research, competition, academic).",
			"Foster inter-team collaboration and knowledge sharing in aerospace engineering and embedded systems.",
			"Provide hands-on experience in FCU design, development, and testing.",
			"Enhance the college's capabilities in drone and UAV technology development.",
		],
		imageUrl: "/projects/fcuproject.jpg",
	},
		{
		id: "functiongenerator",
		title: "Function Generator",
		subtitle: "Affordable in-house Function Generator",
		category: "Hardware",
		subcategory: "Embedded Systems & Hardware",
		src: '/projects/functiongenerator.JPG',
		lead: "Arya Nirhali (SY E&TC)",
		team: [
			"Chandrashekhar Lade (SY ET)",
			"Sanket Kolhe (SY ET)",
			"Vedant Nalawade (SY ET)",
		],
		description:
			"This project aims to design and develop an indigenous, low-cost, compact, two-channel function generator using locally available components. It addresses the high cost of commercial function generators, making essential lab equipment more accessible for educational institutions in India.",
		features: [
			"Utilizes STM32F407ZG microcontroller as the central control unit.",
			"Integrates a Direct Digital Synthesis (DDS) IC for precise and stable analog signals.",
			"Aims to achieve a frequency range of 0.1 Hz – 10 MHz.",
			"Provides standard waveforms: Sine, Square, Triangle, DC, Arbitrary, and Pulse.",
			"Features a 4.3 inch TFT LCD display for a user-friendly interface.",
		],
		imageUrl: "/projects/inhouse-function-generator.png",
	},
	{
		id: "dkms",
		title: "DKMS",
		subtitle: "Documentation & Knowledge Management System",
		category: "Software",
		subcategory: "Web Development & Cloud",
		  src: '/projects/tempdkms.JPG',
		lead: "Sarvesh Kolte (SY IT)",
		team: ["To be decided"],
		description:
			"Addressing critical barriers to faculty productivity and knowledge preservation, this project aims to build a centralized repository for institutional documents. It will replace inefficient, scattered storage methods with a unified, searchable, and secure system on the college's local network.",
		features: [
			"Highly efficient search through large volumes of documents using keywords and tags.",
			"Intuitive interface for uploading and tagging digital or scanned documents.",
			"Multi-level, role-based access controls for secure and flexible document sharing.",
			"Public notice board feature for sharing announcements and documents by tagging users.",
			"Built on a local NAS (Network Attached Storage) for fast and reliable access.",
		],
		imageUrl: "/projects/dkms.jpg",
	},
{
id: "slm",
title: "SLM",
subtitle: "A custom-built 124M-parameter generative model architecturally optimized and trained on 1.6 billion tokens",
category: "Software",
subcategory: "Deep Learning",
  src: '/projects/slm.JPG',
"lead": "Namit Solanki (TY Instru)",
"team": ["No Team Members"],
"description": "This project focused on the end-to-end development of a custom, highly efficient Generative Pre-trained Transformer (GPT) model, deliberately scaled to 124 Million Parameters (based on the GPT-2 Small architecture). The core challenge was stabilizing the training of this large model on limited consumer-grade hardware (NVIDIA RTX 3050). The final V3 model was trained from scratch on a massive, cleaned, and concatenated corpus of 1.6 Billion tokens from the TinyStories and BookCorpus datasets, yielding a high-quality foundational model with exceptional narrative and structural coherence.",
"features": [
  "Model Architecture and Scaling: Implementation of a custom, highly parameterized 12-Layer, 12-Head Transformer network (n_embd=768).",
  "Data Strategy: Successful use of Data Concatenation (merging TinyStories and BookCorpus) to prevent catastrophic forgetting and create a robust, generalized language base.",
  "Performance Engineering: Implementation of torch.compile() and Automatic Mixed Precision (AMP) with bfloat16 to optimize forward and backward passes.",
  "Resource Management: Designed a stable training regimen using Gradient Accumulation (Effective Batch Size = 32) to successfully train the 124M parameter model on 4GB VRAM.",
  "Custom I/O Pipeline: Built a robust data pipeline using NumPy memmap and a custom get_batch function to handle the 1.6 Billion token data stream without using memory-intensive PyTorch DataLoaders.",
  "Proven Generalization: Achieved a low final validation loss of 2.97 with a near-zero overfitting gap (Train Loss ≈ Val Loss), confirming excellent generalization and structural knowledge retention."
],
"imageUrl": ""
},

	{
		id: "mosquitobot",
		title: "Mosquito & Odor Automation Bot",
        subtitle: "",
		category: "Hardware",
		subcategory: "Robotics & AI",
		src: "/projects/mosquito-and-odor.png",
		lead: "Aaron Mobby (SY E&TC)",
		team: [
			"Ansh Salunkhe (SY E&Tc)",
			"Dinesh Seervi (SY Comp)",
			"Vishwank Ramji (SY E&Tc)",
			"Atharva Karekar (SY E&Tc)",
			"Parth Nikam (SY E&Tc)",
			"Somshekhar Hunasimarad (SY E&Tc)",
		],
		description:
			"This project tackles the issue of odor and mosquitoes in areas like college basements by developing a versatile, multi-application bot. It replaces traditional, high-maintenance misting systems with an innovative, sustainable, and autonomous solution for creating a comfortable and healthy environment.",
		features: [
			"Autonomous navigation using LIDAR for mapping and SLAM for localization.",
			"Path retracing and obstacle avoidance for reliable operation.",
			"Continuous mist spray system for odor control and pest reduction.",
			"Automated recharging and refilling at a dedicated station.",
			"A hybrid approach balancing cost, performance, and user comfort.",
		],
		imageUrl: "/projects/mosquito-and-odor.png",
	},
];

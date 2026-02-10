import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo, useRef } from 'react'
import { motion, type Variants } from 'framer-motion'
import { currentProjectsData } from '../../data/currentProjectsData'
import { ProjectItem } from '../../components/projectsList'
import Modal from '../../components/Modal'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent
})

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

type ViewType = 'LIST' | 'GRID'
type FilterType = 'ALL' | 'Hardware' | 'Software'

type ProjectMapped = {
  title: string
  src: string
  slug: string
  category: FilterType | string
  subcategory: string
  subtitle?: string
}

function RouteComponent() {
  const [modal, setModal] = useState<{ active: boolean; index: number }>({
    active: false,
    index: 0
  })
  const [filter, setFilter] = useState<FilterType>('ALL')
  const [view, setView] = useState<ViewType>('LIST')

  const parentRef = useRef<HTMLDivElement>(null)

  const items: ProjectMapped[] = useMemo(
    () =>
      currentProjectsData.map((p) => ({
        title: p.title,
        src: p.src,
        slug: p.id,
        category: p.category,
        subcategory: p.subcategory,
        subtitle: p.subtitle
      })),
    []
  )

  const filtered = useMemo(() => {
    if (filter === 'ALL') return items
    return items.filter((i) => i.category === filter)
  }, [filter, items])

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
    <section className="relative py-24 md:py-40 px-4 overflow-hidden">
  <div className="absolute inset-0 z-0 opacity-20">
    <img
      src="/homepage/hero_desktop.webp"
      alt="background"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-10 md:gap-12">
    <h1 className="text-[12vw] md:text-[7vw] leading-[0.95] font-heading tracking-tight text-white text-left">
      Creating next level
      <br />
      projects
    </h1>

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setFilter('ALL')}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-colors ${
            filter === 'ALL'
              ? 'bg-white text-black'
              : 'border border-white hover:bg-white text-white hover:text-black'
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter('Hardware')}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-colors ${
            filter === 'Hardware'
              ? 'bg-white text-black'
              : 'border border-white hover:bg-white text-white hover:text-black'
          }`}
        >
          Hardware <sup className="ml-1 text-xs md:text-sm">3</sup>
        </button>

        <button
          onClick={() => setFilter('Software')}
          className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-colors ${
            filter === 'Software'
              ? 'bg-white text-black'
              : 'border border-white text-white'
          }`}
        >
          Software <sup className="ml-1 text-xs md:text-sm">2</sup>
        </button>
      </div>

      <div className="flex items-center gap-3 self-start md:self-auto">
        <button
          onClick={() => setView('LIST')}
          className={`h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center border transition ${
            view === 'LIST'
              ? 'bg-white text-black'
              : 'border border-white text-white'
          }`}
        >
          <svg
            width="20"
            height="20"
            stroke={view === 'LIST' ? 'black' : 'white'}
            strokeWidth="2"
            fill="none"
          >
            <line x1="4" y1="7" x2="18" y2="7" />
            <line x1="4" y1="11" x2="18" y2="11" />
            <line x1="4" y1="15" x2="18" y2="15" />
          </svg>
        </button>

        <button
          onClick={() => setView('GRID')}
          className={`h-12 w-12 md:h-14 md:w-14 rounded-full flex items-center justify-center border transition ${
            view === 'GRID'
              ? 'bg-white text-black'
              : 'border border-white text-white hover:bg-white hover:text-black'
          }`}
        >
          <svg
            width="20"
            height="20"
            stroke={view === 'GRID' ? 'black' : 'white'}
            strokeWidth="2"
            fill="none"
          >
            <rect x="4" y="4" width="5" height="5" />
            <rect x="13" y="4" width="5" height="5" />
            <rect x="4" y="13" width="5" height="5" />
            <rect x="13" y="13" width="5" height="5" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>


      <div className="relative w-full py-24">
        {view === 'LIST' && (
          <div ref={parentRef} className="flex items-center justify-center relative">
            <div className="w-full max-w-4xl space-y-12">
              {filtered.map((p, i) => (
                <ProjectItem
                  key={p.slug}
                  index={i}
                  slug={p.slug}
                  title={p.title}
                  subcategory={p.subcategory}
                  setModal={setModal}
                />
              ))}
              <div className="w-full border-b border-gray-400"></div>
            </div>

            <Modal modal={modal} projects={filtered} parentRef={parentRef} />
          </div>
        )}

        {view === 'GRID' && (
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, i) => (
              <div
                key={project.slug}
                className="group cursor-pointer bg-[#1A1A1A] p-3 rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-1"
                onClick={() => setModal({ active: true, index: i })}
              >
                <div className="w-full aspect-[4/3] rounded-[1rem] overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                  <img
                    src={`${project.src}`}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="px-3 pt-6 pb-4 flex flex-col gap-5">
                  <div className="flex items-end justify-between">
                    <div className="flex items-center gap-3">
                   
                      <h3 className="text-white font-bold tracking-wider text-xl uppercase leading-none">
                        {project.title}
                      </h3>
                    </div>

                    <span className="text-neutral-400 text-xs ml-2 font-semibold tracking-widest uppercase leading-none mb-[2px]">
                      {project.subcategory}
                    </span>
                  </div>

                  <p className="text-[#555555] text-[0.6rem] font-bold tracking-[0.15em] uppercase truncate border-t border-[#333] pt-4">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

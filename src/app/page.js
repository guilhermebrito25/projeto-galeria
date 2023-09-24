"use client"

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoIten";
import { photoList } from "@/data/PhotoList";
import { useState } from "react";

const Page = () => {

  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('')

  const openModal = (id) => {
    let image = photoList.find(item => item.id === id)
    if (image) {
      setImageOfModal(image.url)
      setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }
  


  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos Intergalacticas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoList.map(item => (
              <PhotoItem
              key={item.id}
              photo={item}
              onClick={() => {openModal(item.id) }}/>
            ))}
      </section>
      
      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal} />
      }

    </div>
  )
}

export default Page;
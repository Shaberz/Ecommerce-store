import Title from "../layouts/title"


const HomeBanner = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-5">
      <Title className="text-3xl md:text-4xl font-bold text-center uppercase">Our best collections</Title>
      <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px]">Find everything you need to look and feel your best, and shop the latest men&apos;s fashion and life style products</p>
    </div>
  )
}

export default HomeBanner

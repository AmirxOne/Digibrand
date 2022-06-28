import React,{useState,useContext} from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

import { filterContext } from '../context/ContextFilter';



export default function Example() {

  const [check, setCheck] = useState(false);
  console.log(check)

  const chengHandler = (event) => {
      setCheck(false)
      setCheck(event.target.checked)
      setName(event.target.name)
  } 

const [name, setName] = useState("");
console.log(name)

const contextCtx = useContext(filterContext)
contextCtx.check(name)




const dataBrand =[
  {
    id:1,
    name:"",
    title:"All"
  },
  {
    id:2,
    name:"Apple",
    title:"Apple"
  },
  {
    id:3,
    name:"Samsung",
    title:"Samsung"
  },
  {
    id:4,
    name:"Asus",
    title:"Asus"
  }
];
const dataReng = [
  {
    id:1,
    title:"All",
    name:""
  },
  {
    id:2,
    title:"€1000 Top",
    name:"top"
  },
  {
    id:3,
    title:"€1000 Down",
    name:"down"
  }
]


  return (
    <>
    <div className="w-full pt-2">
      <div className="mx-auto w-full max-w-md">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-300 focus-visible:ring-opacity-75">
                <span>Product Brand</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">

                {
                  dataBrand.map((item, i) => 
                  <label key={item.id} className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                    <input name={check ? "" : item.name} value={check} onChange={chengHandler} className='w-4 h-4 ring-orange-400 mr-2 form-checkbox rounded-lg text-orange-300 focus:ring-0' type='checkbox'/>
                    {item.title}
                  </label> )
                }

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-300 focus-visible:ring-opacity-75">
                <span>Price Range</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-orange-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {
                  dataReng.map(item =>
                  <label key={item.id} className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                    <input name={item.name} value={check} onChange={chengHandler} className='mr-2 form-checkbox focus:ring-0 text-orange-300 rounded-lg outline-none' type='checkbox'/>
                    {item.title}
                  </label> )
                }
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
    </>
  )
}
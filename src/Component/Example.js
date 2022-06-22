import React,{useState} from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {

  const [check, setCheck] = useState(false);
  console.log(check)

  const chengHandler = (event) => {
      setCheck(false)
      setCheck(event.target.checked)
  } 


  return (
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
                <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                  <input value={check} onChange={chengHandler} className='mr-2' type='checkbox'/>
                  Apple
                </label>
                <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                  <input value={check} onChange={chengHandler} className='mr-2' type='checkbox'/>
                  Samsung
                </label>
                <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                  <input value={check} onChange={chengHandler} className='mr-2' type='checkbox'/>
                  Asus
                </label>
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
                <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                  <input value={check} onChange={chengHandler} className='mr-2' type='checkbox'/>
                  €1000 Top
                </label>
                <label className='hover:bg-slate-100 flex w-full py-2 items-center justify-start px-3 rounded-lg mb-1 font-light'>
                  <input value={check} onChange={chengHandler} className='mr-2' type='checkbox'/>
                  €1000 Down
                </label>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import {
  ButtonGroup,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
} from '@chakra-ui/core';

export default function PopoverAdd({ onConfirm, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const initialFocusRef = React.useRef();
  return (
    <Popover
      usePortal
      isOpen={isOpen}
      onOpen={open}
      onClose={close}
      placement="right"
      closeOnBlur={true}
      initialFocusRef={initialFocusRef}
    >
      <PopoverTrigger color={'black'}>
        <div className="button addButton">
          <i className="fa-fw fas fa-plus"></i>
          {children}
        </div>
      </PopoverTrigger>
      <PopoverContent zIndex={5} color={'black'} width="auto">
        <PopoverArrow />
        <PopoverHeader display={'flex'} alignItems={'center'}>
          Name:
          <ButtonGroup size="sm" ml="1rem" display={'flex'}>
            <input
              value={newName}
              style={{ height: 32 }}
              ref={initialFocusRef}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  if (newName !== '') {
                    onConfirm(newName);
                    setNewName('');
                    close();
                  }
                }
              }}
            ></input>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                if (newName !== '') {
                  onConfirm(newName);
                  setNewName('');
                  close();
                }
              }}
              variantColor="red"
            >
              Add
            </Button>
          </ButtonGroup>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

'use client';
import React from 'react';
import { motion, LayoutGroup } from 'framer-motion'
import clsx from 'clsx';

import { range } from '@/utils';
import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';

import Equation from './Equation';
import styles from './DivisionGroupsDemo.module.css';

function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea,
}) {
  const [numOfGroups, setNumOfGroups] = React.useState(
    initialNumOfGroups
  );

  const id = React.useId();

  const numOfItemsPerGroup = Math.floor(
    numOfItems / numOfGroups
  );

  const totalNumInGroups = numOfGroups * numOfItemsPerGroup;

  const remainder = includeRemainderArea
    ? numOfItems % numOfGroups
    : null;

  // When we're splitting into 1-3 groups, display side-by-side
  // columns. When we get to 4, it should switch to a 2x2 grid.
  const gridStructure =
    numOfGroups < 4
      ? {
        gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
      }
      : {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
      };

  return (
    <LayoutGroup>
      <Card as="section" className={styles.wrapper}>
        <header className={styles.header}>
          <SliderControl
            label="Number of Groups"
            className={styles.slider}
            step={1}
            min={1}
            max={4}
            value={numOfGroups}
            onChange={(ev) =>
              setNumOfGroups(Number(ev.target.value))
            }
          />
        </header>

        <div className={styles.demoWrapper}>
          <div
            className={clsx(styles.demoArea)}
            style={gridStructure}
          >
            {range(numOfGroups).map((groupIndex) => {
              return (
                <div
                  key={groupIndex}
                  className={styles.group}
                >
                  {range(numOfItemsPerGroup).map((index) => {
                    const totalFromPreviousGroup = groupIndex * numOfItemsPerGroup;
                    // Remember: The 'id' is soley in use to make certain that the 
                    // layoutID and key of one instance of this component, is not
                    // the same of another, otherwise animated elements could be
                    // moved between two instances. We don't want that, we want them
                    // to stay confined to the compenent that is being rendered.
                    const layoutId = `${id}-${index + totalFromPreviousGroup + 1}`
                    // const itemId = index + totalFromPreviousGroup + 1;
                    return (
                      <motion.div
                        className={styles.item}
                        key={layoutId}
                        layoutId={layoutId}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          damping: 40,
                        }}
                      />
                    );
                  })}
                </div>
              )
            })}
          </div>
        </div>
        {includeRemainderArea && (
          <div className={styles.remainderArea}>
            <p className={styles.remainderHeading}>
              Remainder Area
            </p>

            {range(totalNumInGroups, numOfItems)
              .reverse()
              .map((index) => {
                // {range(remainder).map((index) => {
                // Instead of using the remainder to iterate over, I can expand the usage of 'range'
                // by using the 'start & stop' syntax. Start would be where the quotient stops 
                // (numOfGroups * numOfItemsPerGroup). Stop would be the max allowed bounds, which is
                // numOfItems.
                // const totalFromAllGroups = numOfGroups * numOfItemsPerGroup;
                // const layoutId = `${id}-${index + totalFromAllGroups + 1}`
                // const itemId = index + totalFromAllGroups + 1;
                const layoutId = `${id}-${index + 1}`
                return (
                  <motion.div
                    className={styles.item}
                    key={layoutId}
                    layoutId={layoutId}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 40,
                    }}
                  />
                );
              })}
          </div>
        )}

        <Equation
          dividend={numOfItems}
          divisor={numOfGroups}
          remainder={remainder}
        />
      </Card >
    </LayoutGroup>
  );
}

export default DivisionGroupsDemo;

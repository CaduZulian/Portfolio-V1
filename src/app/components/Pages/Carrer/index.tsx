'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Link from 'next/link';

import styles from './styles.module.scss';

import { IDescription, carrerWithTranslations } from '@/app/constants';

// context
import { useTranslation } from '@/app/context/TranslateContext';

export default function Carrer() {
  const buttonsContainerRef = useRef(null);

  const { t, language } = useTranslation();

  const carrer = useMemo(() => {
    return carrerWithTranslations[language.name];
  }, [language]);

  const [currentTab, setCurrentTab] = useState(0);
  const [buttonStyles, setButtonStyles] = useState<
    { width: string; left: string }[]
  >([]);

  const [selectedListItem, setSelectedListItem] = useState(0);
  const [selectedListSubItem, setSelectedListSubItem] = useState(0);
  const [descriptionData, setDescriptionData] = useState<
    IDescription | undefined
  >(
    carrer[0].list[0].subItems?.[0].description ?? carrer[0].list[0].description
  );

  useEffect(() => {
    if (buttonsContainerRef) {
      let leftArray: string[] = ['0rem'];
      let widthArray: string[] = [];

      carrer.forEach((item) => {
        widthArray.push(
          `${
            (document.getElementById(item.optionName)?.offsetWidth ?? 0) / 16
          }rem`
        );

        if (widthArray.length > leftArray.length) {
          let left = 0;

          widthArray.forEach((item, i) => {
            if (widthArray.length !== i + 1) {
              left = left + Number(item.replace('rem', '')) + 0.75;
            }
          });

          leftArray.push(`${left}rem`);
        }
      });

      setButtonStyles(
        carrer.map((_, i) => {
          return {
            width: widthArray[i],
            left: leftArray[i],
          };
        })
      );
    }
  }, [buttonsContainerRef, carrer]);

  useEffect(() => {
    setSelectedListItem(0);
    setSelectedListSubItem(0);
    setDescriptionData(
      carrer[currentTab].list[0].subItems?.[0].description ??
        carrer[currentTab].list[0].description
    );
  }, [currentTab, setSelectedListItem, carrer]);

  return (
    <section className={styles.container}>
      <motion.h2
        id='carrer'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {t.carrer.title}
      </motion.h2>

      <section ref={buttonsContainerRef} className={styles.buttonsGroup}>
        <div
          className={styles.backgroundButton}
          style={buttonStyles[currentTab]}
        />

        {carrer.map((item, index) => {
          return (
            <motion.button
              className={styles.buttonItem}
              key={item.optionName}
              id={item.optionName}
              onClick={() => setCurrentTab(index)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={{
                hidden: { opacity: 1 },
              }}
            >
              {item.optionName}
            </motion.button>
          );
        })}
      </section>

      <section className={styles.main}>
        <ul className={styles.list}>
          {carrer[currentTab].list.map((item, index) => {
            return (
              <motion.li
                key={item.name}
                className={`${styles.listItem} ${
                  selectedListItem === index ? styles.activeItem : ''
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={{
                  hidden: { opacity: 1 },
                }}
              >
                <button
                  title={item.name}
                  onClick={() => {
                    setSelectedListItem(index);
                    !item?.subItems && setDescriptionData(item.description);
                  }}
                >
                  {item.name}
                </button>

                {item?.subItems && selectedListItem === index ? (
                  <ul className={styles.subList}>
                    {item?.subItems.map((subItem, subItemIndex) => (
                      <motion.li
                        key={subItem.name}
                        className={`${styles.subListItem} ${
                          selectedListSubItem === subItemIndex
                            ? styles.activeSubItem
                            : ''
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: subItemIndex * 0.1,
                        }}
                        variants={{
                          hidden: { opacity: 1 },
                        }}
                      >
                        <button
                          title={subItem.name}
                          onClick={() => {
                            setSelectedListSubItem(subItemIndex);
                            setDescriptionData(subItem.description);
                          }}
                        >
                          {subItem.name}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                ) : null}
              </motion.li>
            );
          })}
        </ul>

        <section className={styles.details}>
          <motion.div
            className={styles.detailsTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            <h3>
              {descriptionData?.name}

              {descriptionData?.organization &&
              carrer[currentTab].list[selectedListItem]?.url ? (
                <Link
                  href={carrer[currentTab].list[selectedListItem]?.url}
                  target='_blank'
                >
                  {descriptionData?.organization}
                </Link>
              ) : null}
            </h3>

            <span>
              {descriptionData?.startDate
                ? format(descriptionData.startDate, 'MMM yyyy')
                : ''}
              {' - '}
              {descriptionData?.isFinished
                ? format(descriptionData.endDate, 'MMM yyyy')
                : t.carrer.present}
            </span>
          </motion.div>

          <ul className={styles.detailsDescription}>
            {descriptionData?.activityDescription.map((item, index) => {
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={{
                    hidden: { opacity: 1 },
                  }}
                >
                  <p>{item}</p>
                </motion.li>
              );
            })}
          </ul>
        </section>
      </section>
    </section>
  );
}

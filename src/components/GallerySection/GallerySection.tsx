"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { getImageRotation, isQuarterTurn } from "@/lib/imageRotations";
import Button from "../Button/Button";
import Icon, { type IconName } from "../Icon/Icon";
import SectionKicker from "../SectionKicker/SectionKicker";
import styles from "./GallerySection.module.css";

export interface GalleryTag {
  id: string;
  label: string;
  iconName: IconName;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryItem {
  id?: string;
  slug?: string;
  title: string;
  categoryLabel: string;
  categoryIconName: IconName;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  gallery?: GalleryImage[];
  detail?: {
    clientLabel?: string;
    dateLabel?: string;
    orderTypeLabel?: string;
    summary?: string;
    scopeLabel?: string;
    effectLabel?: string;
  };
}

export interface GallerySectionContent {
  kickerLabel: string;
  titleLines: string[];
  description: string;
  tags: GalleryTag[];
  items: GalleryItem[];
}

interface GallerySectionProps {
  content: GallerySectionContent;
}

const getItemKey = (item: GalleryItem) =>
  item.id ?? item.slug ?? `${item.categoryLabel}-${item.title}`;

function getTileImageStyle(rotation: number): CSSProperties {
  return {
    "--image-rotation": `${rotation}deg`,
    "--image-scale": isQuarterTurn(rotation) ? "1.72" : "1",
    "--image-hover-scale": isQuarterTurn(rotation) ? "1.76" : "1.02",
  } as CSSProperties;
}

function getThumbImageStyle(rotation: number): CSSProperties {
  return {
    "--image-rotation": `${rotation}deg`,
    "--image-scale": isQuarterTurn(rotation) ? "1.28" : "1",
  } as CSSProperties;
}

function getLightboxImageStyle(rotation: number): CSSProperties {
  return {
    "--image-rotation": `${rotation}deg`,
    "--image-scale": isQuarterTurn(rotation) ? "1.36" : "1.02",
  } as CSSProperties;
}

export default function GallerySection({ content }: GallerySectionProps) {
  const [activeTag, setActiveTag] = useState(content.tags[0]?.id ?? "");
  const [activeItemKey, setActiveItemKey] = useState(
    content.items[0] ? getItemKey(content.items[0]) : ""
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const detailColumnRef = useRef<HTMLDivElement | null>(null);

  const visibleItems = useMemo(
    () =>
      activeTag === "all"
        ? content.items
        : content.items.filter((item) => item.tags.includes(activeTag)),
    [activeTag, content.items]
  );

  useEffect(() => {
    if (visibleItems.length === 0) {
      setActiveItemKey("");
      return;
    }

    const hasActiveItem = visibleItems.some((item) => getItemKey(item) === activeItemKey);

    if (!hasActiveItem) {
      setActiveItemKey(getItemKey(visibleItems[0]));
    }
  }, [activeItemKey, visibleItems]);

  const activeItem =
    visibleItems.find((item) => getItemKey(item) === activeItemKey) ?? visibleItems[0];
  const activeGallery = activeItem?.gallery ?? [];
  const activeGalleryImage = activeGallery[activeGalleryIndex];
  const activeGalleryRotation = activeGalleryImage ? getImageRotation(activeGalleryImage.src) : 0;
  const activeGalleryStyle = getLightboxImageStyle(activeGalleryRotation);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
        return;
      }

      if (event.key === "ArrowRight" && activeGallery.length > 1) {
        setActiveGalleryIndex((prev) => (prev + 1) % activeGallery.length);
      }

      if (event.key === "ArrowLeft" && activeGallery.length > 1) {
        setActiveGalleryIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery.length, isLightboxOpen]);

  const handleSelectItem = (itemKey: string) => {
    setActiveItemKey(itemKey);

    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      detailColumnRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleOpenLightbox = () => {
    if (activeGallery.length === 0) {
      return;
    }

    setActiveGalleryIndex(0);
    setIsLightboxOpen(true);
  };

  const handleChangeSlide = (direction: 1 | -1) => {
    if (activeGallery.length <= 1) {
      return;
    }

    setActiveGalleryIndex((prev) => (prev + direction + activeGallery.length) % activeGallery.length);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.headingGroup}>
            <SectionKicker label={content.kickerLabel} />
            <h2 className={styles.title}>
              {content.titleLines.map((line) => (
                <span key={line} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h2>
            <p className={styles.subtitle}>{content.description}</p>
          </div>

          <div className={styles.content}>
            <ul className={styles.filters}>
              {content.tags.map((tag) => (
                <li key={tag.id} className={styles.filterItem}>
                  <button
                    type="button"
                    className={`${styles.filterButton} ${
                      tag.id === activeTag ? styles.filterButtonActive : ""
                    }`}
                    onClick={() => setActiveTag(tag.id)}
                    aria-pressed={tag.id === activeTag}
                  >
                    <span className={styles.filterIcon}>
                      <Icon name={tag.iconName} size="sm" />
                    </span>
                    <span className={styles.filterText}>{tag.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className={styles.body}>
              <div ref={detailColumnRef} className={styles.detailColumn}>
                {activeItem ? (
                  <article className={styles.detailPanel}>
                    <div className={styles.detailMeta}>
                      <span className={styles.detailMetaItem}>
                        <span className={styles.detailMetaIcon}>
                          <Icon name={activeItem.categoryIconName} size="sm" />
                        </span>
                        <span className={styles.detailMetaText}>{activeItem.categoryLabel}</span>
                      </span>
                      {activeItem.detail?.dateLabel ? (
                        <>
                          <span className={styles.detailMetaDivider} aria-hidden="true">
                            •
                          </span>
                          <span className={styles.detailMetaText}>
                            {activeItem.detail.dateLabel}
                          </span>
                        </>
                      ) : null}
                    </div>

                    <h3 className={styles.detailTitle}>{activeItem.title}</h3>

                    <div className={styles.detailInfoList}>
                      {activeItem.detail?.clientLabel ? (
                        <div className={styles.detailInfoRow}>
                          <span className={styles.detailInfoLabel}>Klient</span>
                          <span className={styles.detailInfoValue}>
                            {activeItem.detail.clientLabel}
                          </span>
                        </div>
                      ) : null}

                      {activeItem.detail?.orderTypeLabel ? (
                        <div className={styles.detailInfoRow}>
                          <span className={styles.detailInfoLabel}>Rodzaj zlecenia</span>
                          <span className={styles.detailInfoValue}>
                            {activeItem.detail.orderTypeLabel}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    {activeItem.detail?.summary ? (
                      <div className={styles.detailBlock}>
                        <span className={styles.detailBlockLabel}>Opis zlecenia</span>
                        <p className={styles.detailText}>{activeItem.detail.summary}</p>
                      </div>
                    ) : null}

                    {activeItem.detail?.scopeLabel ? (
                      <div className={styles.detailBlock}>
                        <span className={styles.detailBlockLabel}>Zakres</span>
                        <p className={styles.detailText}>{activeItem.detail.scopeLabel}</p>
                      </div>
                    ) : null}

                    {activeItem.detail?.effectLabel ? (
                      <div className={styles.detailResult}>
                        <span className={styles.detailBlockLabel}>Efekt</span>
                        <p className={styles.detailResultText}>{activeItem.detail.effectLabel}</p>
                      </div>
                    ) : null}

                    {activeGallery.length > 0 ? (
                      <div className={styles.detailActions}>
                        <Button
                          label={`Zobacz zdjęcia (${activeGallery.length})`}
                          iconName="arrowRight"
                          className={styles.galleryButton}
                          onClick={handleOpenLightbox}
                        />
                      </div>
                    ) : null}
                  </article>
                ) : null}
              </div>

              <div className={styles.galleryColumn}>
                <div className={styles.grid}>
                  {visibleItems.map((item) => {
                    const itemKey = getItemKey(item);
                    const isActive = itemKey === activeItemKey;
                    const coverRotation = getImageRotation(item.imageSrc);
                    const coverStyle = getTileImageStyle(coverRotation);

                    return (
                      <button
                        key={itemKey}
                        type="button"
                        className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                        onClick={() => handleSelectItem(itemKey)}
                        aria-pressed={isActive}
                        aria-label={`Pokaż realizację: ${item.title}`}
                      >
                        <div className={styles.media}>
                          <Image
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 26vw, (min-width: 768px) 44vw, 92vw"
                            className={styles.mediaImage}
                            style={coverStyle}
                          />
                        </div>

                        <div className={styles.cardBody}>
                          <div className={styles.meta}>
                            <span className={styles.metaItem}>
                              <span className={styles.metaIcon}>
                                <Icon name={item.categoryIconName} size="sm" />
                              </span>
                              <span className={styles.metaText}>{item.categoryLabel}</span>
                            </span>
                          </div>

                          <h3 className={styles.cardTitle}>{item.title}</h3>
                          <p className={styles.cardProof}>
                            {item.detail?.effectLabel ??
                              item.detail?.orderTypeLabel ??
                              item.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isMounted && isLightboxOpen && activeGalleryImage
        ? createPortal(
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Zdjęcia realizacji ${activeItem?.title ?? ""}`}
        >
          <button
            type="button"
            className={styles.lightboxBackdrop}
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Zamknij galerię"
          />

          <div className={styles.lightboxPanel}>
            <header className={styles.lightboxHeader}>
              <div className={styles.lightboxMeta}>
                <span className={styles.lightboxTitle}>{activeItem?.title}</span>
                <span className={styles.lightboxCounter}>
                  {activeGalleryIndex + 1} / {activeGallery.length}
                </span>
              </div>
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Zamknij galerię"
              >
                <span className={styles.lightboxCloseLabel}>Zamknij</span>
                <span className={styles.lightboxCloseIcon}>
                  <Icon name="x" size="sm" />
                </span>
              </button>
            </header>

            <div className={styles.lightboxStage}>
              {activeGallery.length > 1 ? (
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                  onClick={() => handleChangeSlide(-1)}
                  aria-label="Poprzednie zdjęcie"
                >
                  <Icon name="chevronsRight" size="lg" className={styles.lightboxPrevIcon} />
                </button>
              ) : null}

              <div className={styles.lightboxViewport}>
                <div className={styles.lightboxMedia}>
                  <Image
                    key={activeGalleryImage.src}
                    src={activeGalleryImage.src}
                    alt={activeGalleryImage.alt}
                    fill
                    sizes="100vw"
                    className={`${styles.lightboxImage} ${
                      isQuarterTurn(activeGalleryRotation) ? styles.lightboxImageQuarterTurn : ""
                    }`}
                    style={activeGalleryStyle}
                  />
                </div>
              </div>

              {activeGallery.length > 1 ? (
                <button
                  type="button"
                  className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                  onClick={() => handleChangeSlide(1)}
                  aria-label="Następne zdjęcie"
                >
                  <Icon name="chevronsRight" size="lg" />
                </button>
              ) : null}
            </div>

            {activeGallery.length > 1 ? (
              <div className={styles.lightboxThumbs}>
                {activeGallery.map((image, index) => {
                  const thumbRotation = getImageRotation(image.src);
                  const thumbStyle = getThumbImageStyle(thumbRotation);

                  return (
                    <button
                      key={`${image.src}-${index}`}
                      type="button"
                      className={`${styles.lightboxThumb} ${
                        index === activeGalleryIndex ? styles.lightboxThumbActive : ""
                      }`}
                      onClick={() => setActiveGalleryIndex(index)}
                      aria-label={`Pokaż zdjęcie ${index + 1}`}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="80px"
                        className={styles.lightboxThumbImage}
                        style={thumbStyle}
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>,
        document.body
      )
        : null}
    </>
  );
}

import GiftQuizRow from '@/components/GiftQuizRow';
import React from 'react';
import UserRow from '@/components/UserRow';
import OrderRow from '@/components/OrderRow';
import CourseRow from '@/components/CourseRow';
import UserGroupRow from '../UserGroupRow';
import QuestionnaireRow from '../QuestionnaireRow';
import ConsultationRow from '../ConsultationRow';
import WebinarRow from '../WebinarRow';
import StationaryEventRow from '../StationaryEventRow';
import ProductRow from '../ProductRow';
import StudentsRow from '../StudentsRow';
import CategoryRow from '../CategoryRow';

type PossibleType =
  | 'App\\Models\\User'
  | 'App\\Models\\Course'
  | 'App\\Models\\Consultation'
  | 'EscolaLms\\Consultations\\Models\\Consultation'
  | 'App\\Models\\Webinar'
  | 'EscolaLms\\Webinars\\Models\\Webinar'
  | 'App\\Models\\StationaryEvent'
  | 'EscolaLms\\StationaryEvents\\Models\\StationaryEvent'
  | 'EscolaLms\\Core\\Models\\User'
  | 'EscolaLms\\Cart\\Models\\Order'
  | 'EscolaLms\\Cart\\Models\\Course'
  | 'EscolaLms\\Auth\\Models\\UserGroup'
  | 'EscolaLms\\TopicTypeGift\\Models\\GiftQuiz'
  | 'EscolaLms\\Vouchers\\Models\\Order'
  | 'Questionnaire'
  | 'Product'
  | 'Students'
  | 'Category';

type DataProps = API.LinkedType;

export const TypeButton: React.FC<{
  type: PossibleType;
  type_id: number;
  onData: (data: DataProps) => void;
  text?: React.ReactNode;
}> = ({ type, type_id, onData, text }) => {
  switch (type) {
    case 'App\\Models\\StationaryEvent':
    case 'EscolaLms\\StationaryEvents\\Models\\StationaryEvent':
      return (
        <StationaryEventRow id={type_id} onLoaded={(event) => onData({ type, value: event })} />
      );

    case 'App\\Models\\Webinar':
    case 'EscolaLms\\Webinars\\Models\\Webinar':
      return <WebinarRow id={type_id} onLoaded={(webinar) => onData({ type, value: webinar })} />;
    case 'App\\Models\\Consultation':
    case 'EscolaLms\\Consultations\\Models\\Consultation':
      return (
        <ConsultationRow
          id={type_id}
          onLoaded={(consultation) => onData({ type, value: consultation })}
        />
      );
    case 'App\\Models\\User':
    case 'EscolaLms\\Core\\Models\\User':
      return (
        <UserRow id={type_id} onLoaded={(user) => onData({ type, value: user })} text={text} />
      );
    case 'EscolaLms\\Cart\\Models\\Order':
      return <OrderRow id={type_id} onLoaded={(order) => onData({ type, value: order })} />;
    case 'EscolaLms\\Vouchers\\Models\\Order':
      return <OrderRow id={type_id} onLoaded={(order) => onData({ type, value: order })} />;
    case 'EscolaLms\\Cart\\Models\\Course':
    case 'App\\Models\\Course':
      return (
        <CourseRow
          id={type_id}
          onLoaded={(course) => onData({ type: 'EscolaLms\\Cart\\Models\\Course', value: course })}
          text={text}
        />
      );
    case 'EscolaLms\\Auth\\Models\\UserGroup':
      return (
        <UserGroupRow id={type_id} onLoaded={(userGroup) => onData({ type, value: userGroup })} />
      );
    case 'Questionnaire':
      return (
        <QuestionnaireRow
          id={type_id}
          onLoaded={(questionnaire) => onData({ type, value: questionnaire })}
          text={text}
        />
      );
    // TODO add onLoaded
    case 'EscolaLms\\TopicTypeGift\\Models\\GiftQuiz':
      return (
        <GiftQuizRow id={type_id} onLoaded={(giftQuiz) => onData({ type, value: giftQuiz })} />
      );
    case 'Product':
      return <ProductRow id={type_id} onLoaded={(product) => onData({ type, value: product })} />;
    case 'Students':
      return (
        <StudentsRow id={type_id} onLoaded={(students) => onData({ type, value: students })} />
      );
    case 'Category':
      return (
        <CategoryRow id={type_id} onLoaded={(category) => onData({ type, value: category })} />
      );
    default:
      return type && type_id ? (
        <pre>
          {type} id: {type_id}
        </pre>
      ) : (
        <React.Fragment />
      );
  }
};

export default TypeButton;
